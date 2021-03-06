import gql from 'graphql-tag'

// すべての投稿を取得
export const ALL_POSTS = gql`
    query allPosts {
        posts {
            id
            title
            content
            description
            createdAt
            thumbnail {
                url
            }
        }
    }
`

// IDで1件取得
export const FEACH_POST_BY_ID = gql`
    query feachPostById($id: ID!) {
        post(where: { id: $id }) {
            title
            content
            description
            createdAt
            thumbnail {
                url
            }
        }
    }
`

// 指定ページの投稿を取得
export const POSTS_PER_PAGE = gql`
    query postPerPage($first: Int) {
        posts(orderBy: createdAt_DESC, first: $first) {
            id
            content
            description
            createdAt
            thumbnail {
                url
            }
        }
    }
`
