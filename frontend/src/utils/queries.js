import { gql } from '@apollo/client';

export const QUERY_GYM = gql`
    query gym($phoneNumber:String) {
        gym(phoneNumber: $phoneNumber){
        phoneNumber
        gymEmail
        gymName
        _id
        address
        city
        zip
        state
        }
    }
`;

export const QUERY_MEMBERS = gql`
query Query {
    gymMembers {
        _id
        members {
            _id
            firstName
            lastName
            phoneNumber
            createdAt
            preferredName
            email
        }
    }
}
`;

export const QUERY_EMPLOYEES = gql`
query GymEmployees {
    gymEmployees {
        _id
            employees {
                firstName
                lastName
                email
                phoneNumber
                admin
                _id
            }
        }
    }
`
export const QUERY_MEMBER = gql`
    query member($id: ID!) {
        member(_id: $id) {
        firstName
        lastName
        email
        phoneNumber
        preferredName
        _id
        }
    }
`