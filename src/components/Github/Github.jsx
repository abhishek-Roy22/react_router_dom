// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch('http://api.github.com/users/abhishek-Roy22')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="w-full p-5 flex items-center justify-center gap-2">
        <Link
          to={data.html_url}
          target="_blank"
          className="flex flex-col gap-3 p-2 items-start"
        >
          <img
            src={data.avatar_url}
            alt="avatar"
            width={300}
            height={300}
            className="object-cover rounded-full"
          />
          <span className="text-3xl text-black text-center">{data.name}</span>
          <span className="text-base text-gray-500 text-center">
            {data.login}
          </span>
          <p className="text-sm text-gray-700  text-justify">{data.bio}</p>
        </Link>
      </div>
    </section>
  );
};

export default Github;

export const fetchInfo = async () => {
  const res = await fetch('http://api.github.com/users/abhishek-Roy22');
  return res.json();
};
