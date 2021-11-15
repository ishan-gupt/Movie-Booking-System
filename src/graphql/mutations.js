/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createMovie = /* GraphQL */ `
  mutation CreateMovie(
    $input: CreateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    createMovie(input: $input, condition: $condition) {
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
export const updateMovie = /* GraphQL */ `
  mutation UpdateMovie(
    $input: UpdateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    updateMovie(input: $input, condition: $condition) {
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
export const deleteMovie = /* GraphQL */ `
  mutation DeleteMovie(
    $input: DeleteMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    deleteMovie(input: $input, condition: $condition) {
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
export const createVenue = /* GraphQL */ `
  mutation CreateVenue(
    $input: CreateVenueInput!
    $condition: ModelVenueConditionInput
  ) {
    createVenue(input: $input, condition: $condition) {
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
export const updateVenue = /* GraphQL */ `
  mutation UpdateVenue(
    $input: UpdateVenueInput!
    $condition: ModelVenueConditionInput
  ) {
    updateVenue(input: $input, condition: $condition) {
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
export const deleteVenue = /* GraphQL */ `
  mutation DeleteVenue(
    $input: DeleteVenueInput!
    $condition: ModelVenueConditionInput
  ) {
    deleteVenue(input: $input, condition: $condition) {
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
export const createSlot = /* GraphQL */ `
  mutation CreateSlot(
    $input: CreateSlotInput!
    $condition: ModelSlotConditionInput
  ) {
    createSlot(input: $input, condition: $condition) {
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
export const updateSlot = /* GraphQL */ `
  mutation UpdateSlot(
    $input: UpdateSlotInput!
    $condition: ModelSlotConditionInput
  ) {
    updateSlot(input: $input, condition: $condition) {
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
export const deleteSlot = /* GraphQL */ `
  mutation DeleteSlot(
    $input: DeleteSlotInput!
    $condition: ModelSlotConditionInput
  ) {
    deleteSlot(input: $input, condition: $condition) {
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
