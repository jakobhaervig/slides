# README

Build slides using markdown, whilst adhering to the principles learned from the [How to avoid death By PowerPoint](https://www.youtube.com/watch?v=Iwpi1Lm6dFo) TEDx Talk.

## Basic usage

### Installation


1. Create a Conda environment

    ```bash
    conda create --name <my-env>
    ```

2. Activate the environment

    ```bash
    conda activate mkslides
    ```

4. Install pip in the environment

    ```bash
    conda install pip
    ```

5. Install [mkslides](https://pypi.org/project/mkslides/):

    ```bash
    pip install mkslides
    ```

### How do I use this?

Edit, add or delete your markdown files in the [docs](./docs/) directory, and run `mkslides build docs/` to generate the website in the [site](./site) folder. **That's all to get started!** :rocket:

### Live preview

`mkslides` allows you to start up a live preview, so you can instantly see how your slides look like whilst editing the markdown files.

To start a local webserver with live reloading:

```bash
mkslides serve docs/
```

---

<details>

<summary>Configuration</summary>

## Configuration

:bulb: **You don't have to change these files or settings** if you want to keep things simple. In that case, just ignore this section.

### Theme

If you want another theme, you can change the `theme` entries in [mkslides.yml](./mkslides.yml). You can use a local CSS file or an existing link to a CSS file on the internet.

### Landing page

You can add a template to create a nice landing page for your course. It uses the [Mustache template engine](https://mustache.github.io/). See [mkslides](https://pypi.org/project/mkslides/) for more information.

### [mkslides](https://pypi.org/project/mkslides/) options

You can add them to [mkslides.yml](./mkslides.yml).

### [reveal.js](https://revealjs.com/) options

You can also add them to [mkslides.yml](./mkslides.yml).

### Reveal.js plugins

You can add additional functionality using [Reveal.js plugins](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware) in the `plugins` entries in [mkslides.yml](./mkslides.yml). E.g., the [Mermaid](https://github.com/zjffun/reveal.js-mermaid-plugin) plugin for drawing graphs is added in this repo as an example on how to do it.

</details>

---

<details>

<summary>Additional tools</summary>

## Additional tools

:bulb: **You don't need this** if you want to keep things simple. In that case, just ignore this section. Otherwise, it's here if you want an example.

### Automatic deployment

This repo automatically builds the slides and pushes them to https://hogenttin.github.io/hogent-revealmd/ whenever a commit is pushed to the `main` branch. This is done using using [GitHub actions](https://docs.github.com/en/actions) . You can find the workflow in the [.github](./.github) folder.

</details>
