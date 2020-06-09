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
