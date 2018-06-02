# Basic Work Flow

### $ git init [project-name]
If Required, Create a new local repository with the specified name

### $ git clone [project-name]
Of, pull prject repository from github onto local comupter.

### cd [project-name]
Move into working directory

### $ Git add . 
Tell git to watch current directory for updates/changes

### $ git commit -m "<Comments go here>" 
Commit any changes to the local computer git system

### Git pull origin master
Retrieve other code changes from the remote repository AND merge those changes with your own. This is important because if there are any conflicts between the code you have written and committed and the code that you have pulled from the remote repository you will need to fix it before you send it to the remote server.

### $ git push
Push localy commited files the web server github repository


# CONFIGURE TOOLING
Configure user information for all local repositories

### $ git config --global user.name "[name]"
Sets the name you want attached to your commit transactions

### $ git config --global user.email "[email address]"
Sets the email you want attached to your commit transactions

### $ git config --global color.ui auto
Enables helpful colorization of command line output

# CREATE REPOSITORIES
Start a new repository or obtain one from an existing URL

### $ git init [project-name]
Creates a new local repository with the specified name

### $ git clone [url]
Downloads a project and its entire version history

# MAKE CHANGES
Review edits and craft a commit transaction

### $ git status
Lists all new or modified files to be committed

### $ git add [file]
Snapshots the file in preparation for versioning

### $ git reset [file]
Unstages the file, but preserve its contents

### $ git diff
Shows file differences not yet staged

### $ git diff --staged

Shows file differences between staging and the last file version

### $ git commit -m "[descriptive message]"
Records file snapshots permanently in version history

# GROUP CHANGES
Name a series of commits and combine completed efforts

### $ git branch
Lists all local branches in the current repository

### $ git branch [branch-name]
Creates a new branch

### $ git checkout [branch-name]
Switches to the specified branch and updates the working directory

### $ git merge [branch]
Combines the specified branch’s history into the current branch

### $ git branch -d [branch-name]
Deletes the specified branch
