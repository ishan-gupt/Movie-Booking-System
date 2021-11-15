/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserByUsername = /* GraphQL */ `
  query GetUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      id
      name
      username
      email
      address
      history
      upcoming
      createdAt
      updatedAt
    }
  }
`;
export const getVenueByName = /* GraphQL */ `
  query GetVenueByName($name: String!) {
    getVenueByName(name: $name) {
      id
      slots {
        items {
          id
          seats
          time
          venue {
            id
            slots {
              nextToken
            }
            name
            location
            seats
            movies {
              id
              name
              ratings
              desc
              imageURL
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      location
      seats
      movies {
        id
        name
        ratings
        desc
        imageURL
        venues {
          items {
            id
            slots {
              nextToken
            }
            name
            location
            seats
            movies {
              id
              name
              ratings
              desc
              imageURL
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const getMovieByName = /* GraphQL */ `
  query GetMovieByName($name: String!) {
    getMovieByName(name: $name) {
      id
      name
      ratings
      desc
      imageURL
      venues {
        items {
          id
          slots {
            items {
              id
              seats
              time
              createdAt
              updatedAt
            }
            nextToken
          }
          name
          location
          seats
          movies {
            id
            name
            ratings
            desc
            imageURL
            venues {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      email
      address
      history
      upcoming
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        email
        address
        history
        upcoming
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMovie = /* GraphQL */ `
  query GetMovie($id: ID!) {
    getMovie(id: $id) {
      id
      name
      ratings
      desc
      imageURL
      venues {
        items {
          id
          slots {
            items {
              id
              seats
              time
              createdAt
              updatedAt
            }
            nextToken
          }
          name
          location
          seats
          movies {
            id
            name
            ratings
            desc
            imageURL
            venues {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ratings
        desc
        imageURL
        venues {
          items {
            id
            slots {
              nextToken
            }
            name
            location
            seats
            movies {
              id
              name
              ratings
              desc
              imageURL
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVenue = /* GraphQL */ `
  query GetVenue($id: ID!) {
    getVenue(id: $id) {
      id
      slots {
        items {
          id
          seats
          time
          venue {
            id
            slots {
              nextToken
            }
            name
            location
            seats
            movies {
              id
              name
              ratings
              desc
              imageURL
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      location
      seats
      movies {
        id
        name
        ratings
        desc
        imageURL
        venues {
          items {
            id
            slots {
              nextToken
            }
            name
            location
            seats
            movies {
              id
              name
              ratings
              desc
              imageURL
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listVenues = /* GraphQL */ `
  query ListVenues(
    $filter: ModelVenueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVenues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slots {
          items {
            id
            seats
            time
            venue {
              id
              name
              location
              seats
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        name
        location
        seats
        movies {
          id
          name
          ratings
          desc
          imageURL
          venues {
            items {
              id
              name
              location
              seats
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSlot = /* GraphQL */ `
  query GetSlot($id: ID!) {
    getSlot(id: $id) {
      id
      seats
      time
      venue {
        id
        slots {
          items {
            id
            seats
            time
            venue {
              id
              name
              location
              seats
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        name
        location
        seats
        movies {
          id
          name
          ratings
          desc
          imageURL
          venues {
            items {
              id
              name
              location
              seats
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSlots = /* GraphQL */ `
  query ListSlots(
    $filter: ModelSlotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        seats
        time
        venue {
          id
          slots {
            items {
              id
              seats
              time
              createdAt
              updatedAt
            }
            nextToken
          }
          name
          location
          seats
          movies {
            id
            name
            ratings
            desc
            imageURL
            venues {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
