---
title: "OpenFOAM - Installation using WSL (Windows Subsystem of Linux)"
---

# OpenFOAM
##### Installation using WSL (Windows Subsystem of Linux)

---

### Step 1:

Linux primarily runs on Unix-based systems (such as Ubuntu). We will install Ubuntu on our Windows system using WSL (Windows Subsystem for Linux).

**Install WSL by following the step "Install WSL Command" in the [official guide](https://learn.microsoft.com/en-gb/windows/wsl/install#install-wsl-command).**


---

### Step 2:

Before installing Ubuntu, we need to set enable of couple of Windows features. These can assessed in via Control Panel > Programs and Features > Turn Windows features on or off:

![alt text](img/turn_windows_features_on_or_off.png)

**Enable Virtual Machine Platform and Windows Subsystem for Linux**

![alt text](img/install_windows_features.png)

---

### Step 3:

Using Microsoft Store search for Ubuntu. You will see numerous versions. The version simply called "Ubuntu" represents the latest version available, which is recommended for this guide.

![alt text](img/install_ubuntu.png)

**Choose a Ubuntu version and install it**

---

### Step 4:

Open Ubuntu and you will be prompted to choose a username and password.

**Choose a Ubuntu username and password (note: that the password remains hidden when you enter it, which is fine)**


If the error "WslRegisterDistribution failed with error: 0x80370114" is returned, also enable the feature "Windows Hypervisor Platfrom" in [Step 2](#step-2).

**Verify that everything is working by opening the Ubuntu app. You should get a terminal like this:**

![alt text](img/ubuntu_terminal.png)

---

# The end
