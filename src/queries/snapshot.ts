export const SNAPSHOT_QUERY = /* GraphQL */ `
  query lookup($address: String!) {
    votes(where: { voter: $address }) {
      space {
        id
      }
    }
  }
`;
