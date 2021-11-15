/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie {
    onCreateMovie {
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
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie {
    onUpdateMovie {
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
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie {
    onDeleteMovie {
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
export const onCreateVenue = /* GraphQL */ `
  subscription OnCreateVenue {
    onCreateVenue {
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
export const onUpdateVenue = /* GraphQL */ `
  subscription OnUpdateVenue {
    onUpdateVenue {
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
export const onDeleteVenue = /* GraphQL */ `
  subscription OnDeleteVenue {
    onDeleteVenue {
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
export const onCreateSlot = /* GraphQL */ `
  subscription OnCreateSlot {
    onCreateSlot {
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
export const onUpdateSlot = /* GraphQL */ `
  subscription OnUpdateSlot {
    onUpdateSlot {
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
export const onDeleteSlot = /* GraphQL */ `
  subscription OnDeleteSlot {
    onDeleteSlot {
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
