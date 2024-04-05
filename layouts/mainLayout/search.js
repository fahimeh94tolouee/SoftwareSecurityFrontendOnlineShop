import React, { useState } from "react";
import { SearchBox } from "../../styled_components/layouts/mainLayout/search";
import Request from "../../utilities/request";
import Link from "next/link";
import EventListener from "react-event-listener";
import Router from 'next/router'
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const fetchKey = () => {
    if (keyword.length > 2) {
      Request({
        method: "get",
        url: process.env.apiUrl + "/search/suggestions",
        params: {
          text: keyword
        }
      })
        .then(response => {
          setResult(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      setResult([]);
    }
  };
  return (
    <SearchBox status={result.length <= 0 ? false : true}>
      <EventListener
        target="window"
        onClick={() => {
          setResult([])
        }}
      />
      <button
        onClick={() => {
          Router.replace('/categories/1/?search=' + keyword);
        }}
      >
        <i className="icon-search"/>
      </button>
      <input
        placeholder="Search products..."
        value={keyword}
        onChange={e => {
          setKeyword(e.target.value);
          fetchKey();
        }}
        onKeyPress={e => {
          if (e.charCode === 13) {
            Router.replace('/categories/1/?search=' + keyword);
          }
        }}
      />

      <ul className="result">
        {result.map(item => (
          <li key={item.id}>
            <Link href={`/product/${item.id}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </SearchBox>
  );
};
export default Search;
