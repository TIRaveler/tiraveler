# Server
## Endpoints
### Static file endpoints
[Client endpoints](/client/README.md)

### Authentication
| Endpoint               | Method | Description            |
| ---------------------- | ------ | ---------------------- |
| /login/twitter         | OAuth  | Twitter OAuth Redirect |
| /auth/twitter/callback | OAuth  | Calllback from OAuth   |
| /user/login            | POST   | Login user             |
| /user/logout           | POST   | Logout user            |
| /user/register         | POST   | Register user          |

### API Endpoints
| Endpoint        | Method | Description    | Accepts            | See                                                  |
| --------------- | ------ | -------------- | ------------------ | ---------------------------------------------------- |
| /photos/search  | POST   | Search photos  | location           | [Photo Contoller](/docs/server/dbControllers.md)     |
| /events/search  | POST   | Search events  | location, pictures | [Event Controller](/docs/server/eventControllers.md) |
| /itinerary/save | POST   | Save itinerary | events, itin       | [Database Contoller](/docs/server/dbControllers.md)  |