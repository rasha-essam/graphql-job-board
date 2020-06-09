const endpointURL = 'http://localhost:9000/graphql';

export async function loadJobs() {
  const response = await fetch(endpointURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `{
                jobs{
                  id
                  title
                  company{
                    id
                    name
                  }
                }
              }`,
    }),
  });
  const { data } = await response.json();
  return data.jobs;
}

export async function loadJob(id) {
  const response = await fetch(endpointURL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `query JobQuery($id:ID!){
        job(id:$id){
          id
          title
          company{
            id
            name
          }
          description
        }
      }`,
      variables: { id },
    }),
  });
  const { data } = await response.json();
  return data.job;
}
