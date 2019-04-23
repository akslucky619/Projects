## HTTP
HTTP is connectionless/stateless text based req/res protocol. Clients (web browsers) send requests to web servers for web elements such as web pages and images. After the request is serviced by a server, the connection between client and server across the internet is disconnected.

    - HTTP is the underlying protocol used by the World Wide Web
	- HTTP (Hypertext Transfer Protocol) like any other Application Layer protocol runs over a Transport Layer protocol.
    - A new connection must be made for each request.

### 3 parts of http request

#### 1. URLs

Request URLs consists of multiple parts.
Example is *https://blog.altcampus.io:80/students/register?name=suraj&gender=male*
  - **https** - protocol
  - **blog** - subdomain
  - **altcampus.io** - domain or website name
  - **80** - port
  - **students/register** - path
  - **?** - start of query
  - **name=suraj** - query params(always key value pair)
  - **&** query seperator

#### 2. Headers

HTTP headers allow the client and the server to pass additional information with the request or the response. An HTTP header consists of its case-insensitive name followed by a colon ' : ', then by its value (without line breaks).

There are 4 kinds of headers
1. General header
  - Headers applying to both requests and responses but with no relation to the data eventually transmitted in the body.
  - Examples are:
    - Request URL: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
    - Request Method: GET 
    - Remote Address: 13.35.189.28:443
2. Request header
  - Headers containing more information about the resource to be fetched or about the client itself.
  - Examples are: 
    - scheme: https
    - accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
    - cookie: _ga=GA1.2.1198025837.1533318161; dwf_sg_task_completion=False; dwf_contrib_beta=False; _gid=GA1.2.283126628.1551861552
    - referer: https://www.google.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36
3. Response header
  - Headers with additional information about the response, like its location or about the server itself (name and version etc.).
  - Examples are: 
    - cache-control: s-maxage=300, public, max-age=0
    - Status Code: 200
    - content-language: en-US
    - content-type: text/html; charset=utf-8
    - date: Wed, 06 Mar 2019 10:04:49 GMT
4. Entity header
  - Headers containing more information about the body of the entity, like its content length or its MIME-type.
  - Examples are: 
    - content-length: 344
    - mime-type: application/json
    
#### 3. Body(optional)
This is an optional field which is only sent when user is trying to submit any form data to the server.

#### Http Methods
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE

#### Status codes
