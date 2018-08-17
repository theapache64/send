# send
Quick file transfer through email

### Syntax

```
send [fileName] to [emailId] [as [attachmentName]]
```

### Example Config

```
{
  "name":"John",
  "smtp_config": {
    "host": "us2.smtp.mailhostbox.com",
    "port": "25",
    "username": "john@example.com",
    "password": "myPassword"
  },
  "default_domain": "example.com"
}

```

### .bashrc

```
function send(){
	ts-node --project ~/Documents/projects/send/tsconfig.json ~/Documents/projects/send/src/App.ts send "$1" $2 "$3" $4 "$5"
}
```
