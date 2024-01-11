"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


type Data = {
  // Define the shape of your data here
};

const MyPage = () => {
  const router = useRouter();
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from your API
      const res = await fetch('http://localhost:8000/api/v1/');
      const data: Data = await res.json();
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Use the fetched data here
  return(
  <div>{JSON.stringify(data)}</div>);
};

export default MyPage;

// 'use client'
// console.log("start")

// async function getData() {
//     const res = await fetch('http://127.0.0.1:8000/api/v1/')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
   
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
   
//     console.log(res)
//     return res.json()
//   }
   
//   export default async function Page() {
//     const data = await getData()
//     console.log(data)
//     return <main></main>
//   }

// // async function getUser() {
// //     const res = await fetch(`http://127.0.0.1:8000/api/v1/`)
// //     return res.json()
// //   }
   
// //   export default async function Page() {
// //     // Initiate both requests in parallel
// //     const userData = getUser()
    
   
// //     // Wait for the promises to resolve
// //     const [user] = await Promise.all([userData])
// //     const user1 = user[1]
// //     console.log("user1")
// //     console.log(user1)
   
// //     return (
// //       <>
// //         <h1>{user1.name}</h1>
        
// //       </>
// //     )
// //   }
   

// // // import { GetServerSideProps } from "next";
// // // const BASE_URL = "http://localhost:8000/api/v1/";
// // // export const getServerSideProps: GetServerSideProps = async ({
// // //     params }) => {
// // //     const id = params?.id;
// // //     const res = await fetch(`${BASE_URL}/${id}`);
// // //     if (!res.ok) {
// // //         return { notFound: true, };

// // //     } const json = await res.json();
// // //     const { question_text, pub_date  } = json;
// // //     return {
// // //         props: { question_text, pub_date }
// // //     };
// // // };
// // // // enum BlogPostStatus {
// // // //     Published = "PUBLISHED",
// // // //     Unpublished = "UNPUBLISHED",
// // // // }
// // // type BlogPost = {
// // //     question_text: string; pub_date: string;
// // //     // status: BlogPostStatus; id: number;
// // // };
// // // const BlogPost = ({ question_text, pub_date}: BlogPost) => {
// // //     return (
// // //         <div>
// // //             <header>
// // //                 <h1>{question_text} </h1>
// // //                 <span>Published on: {pub_date}</span>
// // //             </header>
// // //             <div>
                
// // //             </div>
// // //         </div>);
// // // };
// // // export default BlogPost;