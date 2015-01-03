# jans-el.dk

One pager marketing site created for jans-el.dk.

## How to Deploy using Git

Make sure VPS repo is added as a remote:

```
git remote -v
```

If not, add the VPS repo as a remote.

```
git remote add vps git@80.70.5.146:jans-el.git
```

When this has been configured, changes can easily be deployed by pushing the latest commit to VPS:

```
git push vps master
```
