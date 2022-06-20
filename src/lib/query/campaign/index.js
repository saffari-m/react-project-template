import useQuery from '@hooks/request/useQuery';
import { gql } from 'graphql-request';

const CampaignQuery = {
  getById: (id, ugcOffset = "0", ugcFirst = "24", direction = "desc") => {
    const query = gql`
      query GetCampaign(
        $id: ID!
        $ugcFirst: Int64
        $ugcOffset: Int64
        $direction: String
      ) @cacheControl(maxAge: 600) {
        campaignDetail(
          id: $id
          ugcFirst: $ugcFirst
          ugcOffset: $ugcOffset
          direction: $direction
        ) {
          id
          title
          description
          poster
          logo
          categories
          UGCViewCount
          expiredTime
          isExpired
          channel {
            title
          }
          ugcs {
            id
            videoId
            duration
            createdAt
            status
            thumbnail
            viewCount
            formValues {
              key
              value
            }
          }
        }
      }
    `;

    return useQuery({
      query: query,
      variables: {
        id,
        ugcFirst,
        ugcOffset,
        direction,
      },
    });
  },
  getCampaignList: (offset = "0", first = "24") => {
    const query = gql`
      query GetCampaignList($first: Int64, $offset: Int64)
      @cacheControl(maxAge: 600) {
        listCampaign(first: $first, offset: $offset) {
          id
          title
          posterOfoghi
          logo
          expiredTime
        }
      }
    `;
    return useQuery({
      query: query,
      variables: {
        first,
        offset,
      },
    });
  },
  getUgcList: () => {
    const query = gql`
      query GetCampaign(
        $id: ID!
        $ugcFirst: Int64
        $ugcOffset: Int64
        $title: String
        $sort: String
        $category: [String]
      ) @cacheControl(maxAge: 600) {
        campaignDetail(
          id: $id
          ugcFirst: $ugcFirst
          ugcOffset: $ugcOffset
          title: $title
          sort: $sort
          category: $category
        ) {
          id
          ugcs {
            id
            videoId
            duration
            thumbnail
            viewCount
            createdAt
            formValues {
              key
              value
            }
          }
        }
      }
    `;

    return useQuery({ query: query }, { manual: true });
  },
  getFormSchema: () => {
    const query = gql`
      query GetCampaign($id: ID!, $ugcFirst: Int64!, $ugcOffset: Int64!)
      @cacheControl(maxAge: 600) {
        campaignDetail(id: $id, ugcFirst: $ugcFirst, ugcOffset: $ugcOffset) {
          id
          title
          description
          UGCViewCount
          ugcs {
            id
            videoId
            duration
            thumbnail
            viewCount
            formValues {
              key
              value
            }
          }
        }
      }
    `;

    return useQuery({
      query: query,
      variables: {
        id,
        ugcFirst,
        ugcOffset,
      },
    });
  },
};

export default CampaignQuery;
