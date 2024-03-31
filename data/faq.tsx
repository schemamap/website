import * as React from "react";

const faq = {
  title: "Frequently asked questions",
  // description: '',
  items: [
    {
      q: "How does Schemamap.io not corrupt my Postgres database?",
      a: (
        <>
          By assuming all data migrations are faulty by default, and using
          safe-guards every step of the way. One example is not directly
          inserting/updating data, but instead using temporary tables to stage
          the data. This allows full control for introspection and validation
          and committing the data only when everything is in order.
        </>
      ),
    },
    {
      q: "I've had performance issues with my DBs in the past, won't this make it worse?",
      a: "There are IOPS and record/second limiters built-in, allowing you to control the amount of data that is being processed at any given time. This leaves headroom for your application to continue running smoothly.",
    },
    {
      q: "How is the MB/bandwith counted?",
      a: "You are only charged for megabytes of data that is loaded into the temporary tables during data migrations. In case a DB-to-DB data migration, only the ingress data is charged.",
    },
    {
      q: "Is Schemamap.io GDPR compliant?",
      a: "Yes, Schemamap.io is GDPR compliant as it is a data processor, hosted in Germany. We do not store any data to disk during data migrations, only acting as a data-proxy, connecting your Postgres DBs and external sources.",
    },
  ],
};

export default faq;
