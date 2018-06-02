# Git & Git Bash

Coders depend on this tool for version control; the process of logging the development of programs and applications. This comes in handy during collaborative programming, when teams of programmers change, add, and remove code throughout a project’s directory; this process would be chaotic without Git.

The installation also includes Git Bash, or Bash for short. You'll be using this command line terminal throughout the course and during the rest of these instructions.

### Download
Go to Git download page: https://git-scm.com/downloads. Click on the download for your computer.

### Install
Run through the installation file. Make sure you check off the right boxes as shown in these four images.

Save Git to the desktop (this should save Git Bash to your desktop too).
Use Git from the Windows Command Prompt.
Checkout as-is.
Use Windows' default console window.

# SSH Key
Generating SSH keys allows developers to interface with certain remote services without having to constantly type out login information. You're going to set up an SSH key for GitHub.

Without a key, you won’t be able to push your code to GitHub without entering a password each time; trust us, that would be as irritating as needing a key to open every door in your home.

### Sign up for Github
If you haven't signed up for a GitHub account yet, you'll need to do so before moving on with these steps. Visit https://github.com.

### Open up Bash.
We need to set up SSH keys. First, let’s make sure you don’t already have a set of keys on your computer. Type this into your Bash window (copying and pasting will not work):

ls –al ~/.ssh

If no keys pop up, move onto step 4.

If keys do pop up, check that none of them are listed under id_rsa, like in this image:

If you do find a key with a matching name, then you can either overwrite it by following steps 4 to 6, or you can use the same key in steps 10 and beyond. Be advised that you'll have to remember the password tied to your key if you decide not to overwrite it.

### Step 4: Generate Keys
Type in this command along with your email to generate your keys

ssh-keygen –t rsa –b 4096 –C "YOURGITHUBEMAIL@PLACEHOLDER.NET"

### Save Key
When asked to enter a file to save the key, just hit enter.
Also enter a passphrase for your key.
Note: You shouldn’t see any characters appear in the window while typing the password.

### ssh agent
For the next step, we need to use a tool called ssh agent to link our key with our machine. Let’s test whether ssh-agent is working. Run this command in Bash:

eval "$(ssh-agent –s)"

### Run Command
Now run this command:

ssh-add ~/.ssh/id_rsa

### Enter Key
When prompted for a passphrase, enter the one associated with the key.

If you’ve forgotten this password, just create a new one, starting with step 4.

### Enter Key to Github
We need to add the key to GitHub. Copy the key to your clipboard by entering this command:

clip < ~/.ssh/id_rsa.pub

You shouldn’t see any kind of message when you run this command. If you do, make sure you entered it correctly.

Do not copy anything else to your clipboard until you finish the next instructions. Otherwise, you’ll have to repeat this step again.

Go to https://github.com/settings/ssh. Click the “New SSH Key” button.

When the form pops up, enter a name for your computer in the Title input. In the Key input, paste the SSH key you copied.

Now we just need to add GitHub to your computer’s list of acceptable SSH hosts. Go back to your Bash window. Type in this command: ssh –T git@github.com


