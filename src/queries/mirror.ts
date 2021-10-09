export const MIRROR_QUERY = /* GraphQL */ `
  query FetchTransactions($profileAddresses: [String!]!) {
    transactions(
      first: 100
      tags: [
        { name: "App-Name", values: ["MirrorXYZ"] }
        { name: "Contributor", values: $profileAddresses }
      ]
    ) {
      edges {
        node {
          id
          tags {
            name
            value
          }
        }
      }
    }
  }
`;
