import useQuery from '@hooks/request/useQuery';
import { gql } from 'graphql-request';

const UGCQuery = {
  getById: (id) => {
    if (!id) return;

    // a func that flatten and normalize formValues into ugcDetail
    const transformedUgcDetail = (data) => {
      const { ugcDetail } = data;
      const { formValues } = ugcDetail;
    
      if (formValues) {
        formValues.forEach((item) => {
          ugcDetail[item['key']] = item['value'];
        });
        delete ugcDetail.formValues;
      }
      return data;
    }
    
    const query = gql`
      query GetUGCById($id: ID!) {
        ugcDetail(id: $id) {
          id
          status
          videoId
          duration
          thumbnail
          viewCount
          token
          formValues {
            key
            value
          }
          tags {
            name
          }
          campaign {
            id
            title
            logo
            description
            expiredTime
            isExpired
          }
        }
      }
    `;
    return useQuery(
      {
        query: query,
        variables: {
          id,
        },
      },
      { transformResponse: (res) => transformedUgcDetail(res) }
    );
  },
  getAllUgcList: (offset = "0", first = "24") => {
    const query = gql`
      query GetAllUgcList($first: Int64, $offset: Int64)
      @cacheControl(maxAge: 600) {
        listUgc(first: $first, offset: $offset) {
          id
          createdAt
          videoId
          duration
          status
          thumbnail
          viewCount
          formValues {
            key
            value
          }
          campaign {
            id
            title
          }
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
  getMoreUgcList: (offset = "0", first = "24") => {
    const query = gql`
      query getMoreUgcList($first: Int64, $offset: Int64)
      @cacheControl(maxAge: 600) {
        listUgc(first: $first, offset: $offset) {
          id
          createdAt
          videoId
          duration
          status
          thumbnail
          viewCount
          formValues {
            key
            value
          }
          campaign {
            id
            title
          }
        }
      }
    `;
    return useQuery(
      {
        query: query,
        variables: {
          first,
          offset,
        },
      },
      { manual: true }
    );
  },
};

export default UGCQuery;
