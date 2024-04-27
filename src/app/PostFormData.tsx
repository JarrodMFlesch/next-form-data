"use client";

import { serialize } from "object-to-formdata";

export const PostFormData = () => {
  const onClick = async () => {
    const data = {
      un: "dev@acme.com",
      pw: "secure",
    };

    const dataToSend = serialize(
      { _payload: JSON.stringify(data) },
      {
        indices: true,
        nullsAsUndefineds: false,
      }
    );

    try {
      const res = await fetch("/api/test", {
        method: "post",
        body: dataToSend,
      });
      const json = await res.json();
      console.log({ json });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button type="button" onClick={onClick}>
      post form data
    </button>
  );
};
