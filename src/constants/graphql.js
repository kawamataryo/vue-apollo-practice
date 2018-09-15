export const NEW_LINKS_SUBSCRIPTION = gql`
    subscription {
        Link(filter: {
            mutation_in: [CREATED]
        }) {
            node {
                id
                url
                description
                createdAt
                postedBy {
                    id
                    name
                }
                votes {
                    id
                    user {
                        id
                    }
                }
            }
        }
    }
`