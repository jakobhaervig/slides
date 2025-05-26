---
title: "OpenFOAM - Installation using WSL (Windows Subsystem of Linux)"
---

# Introduction

**Goal:** Install OpenFOAM on Windows using WSL (Windows Subsystem for Linux). 

---

## Prerequisites

### Step 1: Install WSL

Install WSL using the [official guide](https://learn.microsoft.com/en-gb/windows/wsl/install#install-wsl-command). *Note:* Only the step "Install WSL Command" is needed.

---

## Prerequisites

### Step 2: Enable required Windows features

Enable required Windows Features (go to Control Panel > Programs and Features > Turn Windows features on or off.):

![alt text](turn_windows_features_on_or_off.png)

Then enable:
 - *Virtual Machine Platform*
 - *Windows Subsystem for Linux*

![alt text](install_windows_features.png)

---

## Prerequisites

### Step 3: Install Ubuntu

Go to Microsoft Store and install *Ubuntu*:

![alt text](install_ubuntu.png)

Open Ubuntu and choose a username and password. *Note:* that the password remains hidden when you enter it, which is fine.
If the error "WslRegisterDistribution failed with error: 0x80370114" is returned, also enable the feature "Windows Hypervisor Platfrom" in step **1c)**.

---

## Prerequisites

### Step 3: Install Ubuntu