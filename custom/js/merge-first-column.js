// custom/merge-first-column.js
export function mergeColumnVertically(tableId, colIndex = 0) {
  const table = document.getElementById(tableId);
  if (!table) return;
  const cloned = table.cloneNode(true);
  const rows = cloned.tBodies && cloned.tBodies.length
    ? Array.from(cloned.tBodies).map(tb => Array.from(tb.rows)).flat()
    : Array.from(cloned.querySelectorAll('tr'));
  const toRemove = [];
  let prevCell = null;
  for (const row of rows) {
    const cells = row.cells;
    if (!cells || cells.length === 0) { prevCell = null; continue; }
    const cell = cells[colIndex];
    if (!cell) { prevCell = null; continue; }
    const prevText = prevCell ? String(prevCell.textContent).trim() : null;
    const currText = String(cell.textContent).trim();
    if (prevCell && prevText === currText && prevCell.tagName === cell.tagName) {
      const prevSpan = parseInt(prevCell.getAttribute('rowspan') || '1', 10);
      const currSpan = parseInt(cell.getAttribute('rowspan') || '1', 10);
      prevCell.setAttribute('rowspan', prevSpan + currSpan);
      toRemove.push(cell);
    } else {
      prevCell = cell;
    }
  }
  for (const n of toRemove) n.remove();
  table.replaceWith(cloned);
}
export function mergeFirstColumnOnLoad(tableId='table') {
  document.addEventListener('DOMContentLoaded', () => mergeColumnVertically(tableId, 0));
}