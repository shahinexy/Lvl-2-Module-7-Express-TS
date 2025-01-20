**Upload Image: (POST)**
`/api/files/upload-img` <br>
```diff
For testing purpuse send JPG/PNG file from Postman Key: file, Type: File
```

**Request Body:** 
```diff
Key: data, Type: Text
```

```
{
    "name": "New Image",
    "folderId": "678e0a8f3cb41ed26ba26e73"
}
```
```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```
