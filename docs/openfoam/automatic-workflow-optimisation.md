---
title: "OpenFOAM - Automatic workflow: Optimisation"
---

# Debug slides

These slides are used for debugging, otherwise there is nothing to see here ... .

---

## Unordered lists with different indentation

-   aaa
    -   bbb
        -   ccc
            -   ddd
            -   eee
        -   fff
    -   ggg
-   hhh

---

## Mixed lists with different indentation

1. aaa
    - bbb
        1. ccc
            - ddd
                1. eee
                2. test
            - fff
        2. ggg
    - hhh
2. iii

---

## Margins before/after text

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

## Margins before/after list

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

-   Test 1
-   Test 2
-   Test 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

## Margins before/after list

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

-   Test 1
    -   Test 2
        -   Test 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

## Margins before/after quote

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
> ~ Someone

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

## Margins before/after math

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

$$
S_n(x)=\sum_{k=1}^n \frac{\sin(kx)}{k} \gt 0\quad (n\geq 1,\quad 0 \lt x \lt \pi)
$$

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

## Margins before/after table

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

| abc | abc |
| --- | --- |
| xyz | 123 |
| xyz | 123 |

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

## Margins before/after image

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

![](../img/hello.webp)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

## Margins before/after code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

```python
def sum(a, b):
    c = a + b
    return c
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

## Margins before/after video

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sGF6bOi1NfA?si=Xolnp5XjGsdLB_8Q" allowfullscreen></iframe>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

## Multicolumn overflow

<div class="multicolumn">
<div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</div>
<div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</div>
<div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</div>
</div>

---

## Large code base

```python [10|30|60]
# Knuth-Morris-Pratt (KMP) Algorithm for Pattern Matching

# Function to create the Longest Prefix Suffix (LPS) array
def compute_lps_array(pattern):
    length = 0  # length of the previous longest prefix suffix
    lps = [0] * len(pattern)  # lps[i] is the length of the longest prefix suffix of pattern[0...i]
    i = 1  # Start from the second character of the pattern

    # Loop to calculate lps[i] for i = 1 to len(pattern) - 1
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    return lps

# Function implementing the KMP algorithm
def kmp_search(text, pattern):
    # Get the length of text and pattern
    n = len(text)
    m = len(pattern)

    # Preprocess the pattern to compute the lps array
    lps = compute_lps_array(pattern)

    i = 0  # index for text[]
    j = 0  # index for pattern[]

    # List to store the starting indices of pattern matches
    match_positions = []

    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1

        if j == m:
            # Pattern found, record the starting index
            match_positions.append(i - j)
            j = lps[j - 1]  # Reset j using the lps array

        elif i < n and pattern[j] != text[i]:
            # Mismatch after j matches
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

    return match_positions

# Example usage
if __name__ == "__main__":
    text = "ababcabcabababd"
    pattern = "ababd"

    result = kmp_search(text, pattern)

    if result:
        print(f"Pattern found at indices: {result}")
    else:
        print("Pattern not found in the text.")
```

---

## Single page large image (fit)

<img src="../img/screen-test-large.jpg" class="r-stretch" />

---

## Single page small image (fit)

<img src="../img/hello.webp" class="r-stretch" />

---

## Multicolumn images

<div class="multicolumn">

<div>

![](../img/screen-test-large.jpg)
![](../img/screen-test-large.jpg)
![](../img/screen-test-large.jpg)

</div>

<div>

![](../img/screen-test-large.jpg)
![](../img/screen-test-large.jpg)
![](../img/screen-test-large.jpg)

</div>

<div>

![](../img/screen-test-large.jpg)
![](../img/screen-test-large.jpg)
![](../img/screen-test-large.jpg)

</div>

</div>

---

## More notes than fit on a single slide

Check out the notes!

Notes:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula, eros sit amet gravida fermentum, magna sapien ultrices justo, in auctor tortor eros vel dolor. Ut molestie tempus lacus, a interdum nisi finibus eu. Fusce eros mi, facilisis vitae molestie nec, ultricies ac enim. Sed luctus, diam eu dapibus cursus, sem odio suscipit nibh, ac maximus ex elit non dui. Cras efficitur finibus neque. Vivamus quis convallis metus. Nullam pellentesque dignissim mauris, non tincidunt sem rutrum ut. Donec at venenatis orci. Nam ipsum nisi, imperdiet id porttitor sed, porttitor vitae leo. Donec at vehicula leo. Fusce eu lectus in augue interdum scelerisque ut at velit. Aenean quis sodales sem. Ut pretium vitae augue ac condimentum. Nulla facilisi. Aliquam sodales mauris eget venenatis eleifend.

Phasellus vitae nisi tincidunt nisl aliquet gravida. Nulla suscipit, erat non condimentum pellentesque, enim sapien sagittis ex, non pharetra erat lorem in neque. Praesent hendrerit purus quis lacus condimentum bibendum. Aenean pharetra ullamcorper purus, id faucibus est. Donec pretium urna vitae euismod ultrices. Vestibulum vehicula non risus ut iaculis. Nullam scelerisque dictum ullamcorper.

Aliquam sed tortor felis. Mauris convallis lacus quis diam sollicitudin egestas feugiat et diam. In eu malesuada magna, a laoreet felis. Vivamus non pulvinar tellus, quis dictum massa. In sed tincidunt risus. Praesent consequat quam sit amet auctor egestas. Nulla et nunc a nisi congue blandit nec sed felis. In a massa et erat suscipit placerat vitae et eros. Proin mollis pulvinar laoreet. Vestibulum eget enim et nibh venenatis feugiat vitae nec lorem.

Maecenas vehicula et erat nec faucibus. Sed in tincidunt dui. Morbi vestibulum felis diam, sed lacinia eros aliquet sit amet. Donec commodo, lacus vitae euismod mattis, libero ex tristique augue, vel porttitor velit purus in metus. Morbi dolor tortor, rhoncus et lacus nec, placerat commodo est. Quisque maximus dictum sodales. Nunc faucibus varius mollis.

Sed imperdiet scelerisque est, sit amet convallis purus eleifend ac. Donec interdum, urna quis sodales euismod, nisl risus auctor sem, eu aliquam dolor ante at mauris. Aliquam sapien magna, porta in ullamcorper eget, mattis tincidunt tellus. Proin ut sem nec augue vestibulum varius non id enim. Quisque mollis sagittis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vitae tristique ante. Nulla feugiat sit amet justo blandit cursus. Donec aliquam accumsan diam quis porta. Pellentesque sit amet ligula volutpat, convallis justo tristique, tristique lectus. Curabitur tortor metus, varius vel maximus id, vulputate sit amet massa.

Donec at nulla a elit mollis blandit. Ut non mauris lacus. Praesent viverra eros id ipsum sollicitudin hendrerit. Curabitur blandit nunc id tellus iaculis eleifend. Ut non sem sollicitudin, bibendum ex posuere, dapibus massa. Curabitur non eros in libero pellentesque dignissim. Aliquam vulputate lacus id tellus faucibus pellentesque. Cras nec aliquam ex. Phasellus suscipit aliquet consequat. Cras vitae eleifend nunc, ut porta enim. Fusce ac odio pretium, accumsan libero vitae, euismod velit. Ut sollicitudin interdum nulla, sed viverra augue vulputate id. Nam nisi nunc, volutpat vitae vestibulum non, hendrerit vel justo. Sed in efficitur velit. Integer semper, purus non bibendum fringilla, justo elit ullamcorper nisi, et pulvinar ligula ante id quam. Suspendisse non purus sagittis, venenatis augue fermentum, suscipit nulla.

Mauris ultricies turpis quis volutpat consectetur. Sed efficitur tempus facilisis. Aliquam ante lacus, suscipit eu velit euismod, imperdiet tempor massa. Nullam sollicitudin dignissim justo, vel rhoncus orci finibus vel. Curabitur a aliquam felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium, libero sed hendrerit scelerisque, mi turpis tincidunt nibh, nec convallis risus libero nec sapien. Aliquam malesuada libero nulla, sit amet tempor sapien consectetur vitae. Phasellus magna elit, luctus quis nibh in, eleifend efficitur lorem. Duis vehicula tortor quis condimentum tempor. Vestibulum bibendum leo in nibh consequat, eu auctor orci ullamcorper. Nunc vel efficitur nisl.

Phasellus in magna quis massa dignissim gravida. Curabitur auctor urna vitae vehicula tincidunt. Nam in lorem non tortor imperdiet facilisis id a urna. Nam pharetra dolor id ipsum gravida finibus. Aenean risus massa, finibus ac ante et, malesuada placerat quam. Nam imperdiet lorem venenatis ipsum pretium aliquet. Sed a ex ultrices, consectetur ligula quis, tempor dolor. Integer eleifend ante ligula, ac dignissim diam posuere sed. Vivamus scelerisque iaculis nisi, et venenatis justo varius vel. Pellentesque tortor tortor, finibus dignissim mauris vel, mollis imperdiet ligula. Pellentesque eget euismod lacus. Aliquam erat volutpat. Donec elementum suscipit leo, a placerat orci pharetra ac.

In hac habitasse platea dictumst. Nulla eget est odio. In et imperdiet justo, ac venenatis justo. Cras a sollicitudin diam. Mauris laoreet arcu quis viverra ullamcorper. Nam et suscipit dui, vitae accumsan enim. Donec a lectus tincidunt, lobortis eros ac, consequat eros. Sed quis fringilla leo, et tempor ante. Morbi finibus sodales convallis. Sed quis dui velit. Vivamus nec varius dui. Cras venenatis justo vitae ultricies lacinia. Integer iaculis nisi mattis sagittis ullamcorper. In hac habitasse platea dictumst.

Sed sem leo, malesuada non fermentum a, rutrum ac nibh. Nullam sodales justo vitae nulla interdum accumsan eu et enim. Praesent lacinia efficitur ipsum ut malesuada. Nulla volutpat vel purus ac pretium. Pellentesque porttitor lorem arcu, sed posuere mi aliquet id. Mauris maximus sodales nulla, eu dapibus nisl scelerisque eu. Ut semper interdum metus, vitae sollicitudin lorem euismod vitae. Nulla sollicitudin augue libero, ac mattis tellus convallis eget. Mauris placerat, lectus ac blandit cursus, arcu felis rutrum massa, ac fermentum ex nisi a risus.

Praesent quam diam, gravida quis ullamcorper non, molestie sed dui. Quisque vel dignissim lacus, ut tempor urna. Cras porttitor turpis vitae nibh condimentum volutpat. Nulla tempus, lectus faucibus accumsan lacinia, eros diam placerat lacus, non tristique risus quam vel risus. Phasellus vitae aliquam tellus. Nunc fringilla vulputate elementum. Duis elementum metus eget blandit commodo. Suspendisse potenti. Proin iaculis odio quis eros rhoncus, at viverra mauris consequat. Sed vitae iaculis orci. Sed laoreet tincidunt tellus, et scelerisque leo dignissim sed. Fusce ac mi leo. Nullam imperdiet, ex ut placerat lobortis, felis lorem aliquet ligula, ut dictum mi velit ut ligula. Vivamus scelerisque scelerisque sapien, semper facilisis ligula sodales in.

Vestibulum luctus, mi vel ultrices sodales, metus dui commodo enim, sit amet interdum est lectus vitae odio. Curabitur mollis, dolor at convallis rutrum, urna turpis dictum nibh, ac dignissim mi purus eu magna. Curabitur nec lorem tortor. Curabitur porta eros at elit posuere suscipit. Sed ac nulla est. Aliquam augue enim, elementum eu lacinia id, aliquam eu risus. Mauris congue mauris ex, ut elementum urna dignissim cursus. Duis ut facilisis nunc. Phasellus facilisis tempor velit, vel pellentesque eros ornare bibendum. Praesent nec aliquet urna, et lacinia sem. Nunc vel tellus tortor. Maecenas augue libero, porttitor ut dignissim varius, feugiat et tortor.

Morbi libero nisi, sodales ut mollis quis, porta eget urna. Sed id massa aliquet, ultrices mi eu, blandit velit. Praesent aliquet tellus mauris, vitae rutrum justo consectetur eu. Phasellus lacinia augue non consectetur rutrum. Proin sit amet lorem in ipsum sollicitudin congue nec vel mauris. Nulla at neque dignissim, varius tellus et, suscipit ante. Quisque placerat varius nisl a rhoncus. Quisque nec lectus diam. Curabitur ante metus, aliquam id aliquet eu, tristique eu ipsum. Integer vitae velit ac enim interdum malesuada sed a eros.

Ut erat est, accumsan vel pretium vitae, suscipit commodo lacus. Nullam a euismod massa. Sed accumsan auctor quam, vitae mollis urna fringilla nec. Aenean tempus, felis a laoreet placerat, lorem dolor malesuada odio, non hendrerit mi eros quis urna. Donec in facilisis ipsum, quis ultrices turpis. Aliquam ut risus eu purus rhoncus rhoncus egestas nec diam. Donec condimentum enim mattis massa consequat, et efficitur enim porta. Ut molestie semper nisl, at placerat dui sagittis in. Duis facilisis augue id erat finibus, in fermentum tellus mattis. Praesent magna mauris, pulvinar eu dui tincidunt, ultrices placerat turpis. In varius cursus euismod. Pellentesque convallis tortor vel nibh consectetur posuere. Duis fringilla viverra turpis interdum scelerisque. Fusce lectus lorem, tincidunt sit amet aliquam sed, ultrices a nisl.

Vivamus sed dictum lectus. In a nibh lorem. Duis nibh orci, laoreet et enim nec, elementum placerat eros. Quisque cursus eros vitae ultricies dignissim. Vestibulum scelerisque quam a augue dapibus facilisis. Nullam tellus magna, efficitur vel odio et, vulputate auctor mauris. Vivamus in nisi vel lorem ornare aliquam. Nam condimentum lectus tellus, vel aliquam erat luctus auctor. Donec condimentum libero metus, non blandit turpis cursus ac. In nec erat commodo, ornare lectus sit amet, venenatis metus. Morbi nec massa vel leo porttitor condimentum ut quis dolor. Morbi ullamcorper felis ut ipsum malesuada, eu varius felis maximus. Cras eu leo porta, pretium sapien sed, pharetra velit. Cras quis sollicitudin odio, quis commodo tellus. Curabitur ornare, lectus nec gravida consequat, enim leo lacinia arcu, non convallis lectus erat nec justo. Nulla bibendum fermentum turpis sed ullamcorper.

Praesent non imperdiet metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla consectetur condimentum mauris id efficitur. Vestibulum accumsan dapibus sapien. Nullam finibus rutrum elit id rhoncus. Proin pretium mi justo, ut rhoncus lorem mollis sit amet. Vestibulum bibendum consequat enim sed gravida. Quisque sollicitudin porta nisl sed dictum. Phasellus ut aliquet ex. Sed nec consequat nisl, nec gravida libero. Nam fermentum purus erat, nec consequat massa egestas eget. Etiam quis bibendum tortor, ac consequat lorem. Ut a rhoncus enim. Maecenas tristique varius ligula quis faucibus.

Mauris vel urna sed diam sollicitudin aliquam. Mauris non dolor et lorem venenatis porttitor vel eu augue. Cras sit amet nunc quis mi porttitor pretium vel in arcu. Aenean scelerisque fringilla placerat. Nunc lorem lacus, sollicitudin non lobortis id, elementum quis massa. Duis in nisi sit amet odio venenatis vulputate. Nunc nec malesuada lacus. Nulla feugiat quam quam.

Vivamus eget quam a lorem interdum imperdiet. Cras sed ex dolor. Proin vestibulum nunc non tincidunt lobortis. Sed sit amet vestibulum neque, non maximus nulla. Suspendisse diam nisl, venenatis ut ullamcorper eu, blandit ut ipsum. Vivamus vel lobortis diam, quis dignissim lacus. Duis imperdiet, lacus id mollis tristique, libero sapien ultrices ligula, vitae semper mi dolor tincidunt massa. Maecenas accumsan volutpat magna, nec porta est molestie a. Vestibulum malesuada viverra libero, lacinia viverra metus consectetur at.

Vestibulum tristique volutpat augue, sit amet accumsan velit gravida ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla blandit posuere efficitur. Aenean metus orci, sagittis quis iaculis sit amet, tristique vitae lectus. Phasellus accumsan velit sed lorem vulputate efficitur. Curabitur aliquet, purus id pellentesque imperdiet, diam leo tincidunt nibh, volutpat dapibus risus justo a eros. Mauris cursus ligula nec augue gravida consequat. Fusce eu suscipit neque, non accumsan dolor. Nunc non massa augue. Donec consectetur, mauris eget sodales mollis, velit lacus aliquet orci, ut malesuada felis dui porttitor ligula. Etiam lorem turpis, varius nec blandit a, dignissim ac enim. Vestibulum sem risus, varius ut dui at, varius blandit ante. Suspendisse ac quam finibus, porttitor nisl non, cursus enim.

Donec in nunc neque. Nulla facilisi. Maecenas enim arcu, dapibus id felis ac, elementum luctus dui. In nec lobortis metus, eget mollis risus. Aliquam lobortis, magna eget vehicula interdum, tortor lacus convallis magna, at lobortis purus dui nec turpis. Sed fringilla pharetra felis et fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus.

---

# The end
