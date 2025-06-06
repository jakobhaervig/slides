---
title: "OpenFOAM - Parametric workflow with Salome and Python"
---

# Introduction


**Goal:** Setup a workflow that utilises Salome and Python generate and simulate OpenFOAM cases

---

## Prerequisites

Before proceeding, make sure to have the following installed:

- **OpenFOAM**
    -   It will be assumed you have a working installation of OpenFOAM.
        -   ccc
            -   ddd
            -   eee
        -   fff
    -   ggg
-   hhh

---

## Setup virtual environment for Python

A virtual environment protects our Python installation and keep it seperated for other Python installations.

```bash
conda create --name of pip
```

Then activate it:
```bash
conda activate of
```

## Install various packages for our setup

We will use various Python packages:

[OpenTURNS](https://openturns.github.io/www/) for performing various workflow related tasks:
```bash
pip install openturns
```

[NumPy](https://numpy.org) for performing various workflow related tasks:
```bash
pip install numpy
```
