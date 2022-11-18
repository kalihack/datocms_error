import React from "react";
import {gql,GraphQLClient} from 'graphql-request'


export default function Home({course}) {
console.log(course)
  return (
    <React.Fragment>
      <h1>hello</h1>
    </React.Fragment>
  );
}

const query = gql`
query{
  course{
    id
    nameOfTheCourse
    courseDetails {
      ... on CourseHeaderRecord {
        smallTitle
        bigTitle
        buttonText
        description
      }
    }
  }
}


`
export  const getStaticProps = async() => {
  const endPoint = 'https://www.datocms.com/'
  const graphQLClient = new GraphQLClient(endPoint,{
    headers:{
      "content-type":"application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
      
  }})
  const course = await graphQLClient.request(query)
  console.log(course)
  return {
    props:{
      course
    }
  }
}