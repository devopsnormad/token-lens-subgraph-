import axios from 'axios';

// Function to fetch transfers
export async function fetchTransfers(apiKey) {
  const endpoint = 'https://api.studio.thegraph.com/query/87213/thegraph-bounty/version/latest';
  
  const query = `
  query MyQuery {
    transfers(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
      id
      transactionHash
      blockNumber
      from
      to
      value
      blockTimestamp
    }
  }`;

  try {
    const response = await axios.post(
      endpoint,
      { query },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching transfers:', error);
    return null;
  }
}

// Function to fetch total transfers based on token type
export async function fetchTotalTransfers(token) {
  // Define endpoints for different tokens
  const tokensEndpoints = {
    usdt: 'https://api.studio.thegraph.com/query/87213/thegraph-bounty/version/latest',
    bnb: 'https://api.studio.thegraph.com/query/87213/thegraph-bounty-bnb/version/latest',
    trx: 'https://api.studio.thegraph.com/query/87213/thegraph-bounty-trx/version/latest',
    shib: 'https://api.studio.thegraph.com/query/87213/thegraph-bounty-shib/version/latest',
  };

  // Ensure the token is valid
  if (!(token in tokensEndpoints)) {
    throw new Error(`Invalid token key: ${token}`);
  }

  // Get the correct endpoint based on the token
  const endpoint = tokensEndpoints[token];

  // Get the start and end of the current day
  const date = new Date();
  const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  const endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);

  // Convert to timestamps in seconds
  const startTimestamp = Math.floor(startOfDay.getTime() / 1000);
  const stopTimestamp = Math.floor(endOfDay.getTime() / 1000);

  // GraphQL query to fetch transfers within the timestamp range
  const query = `
  query MyQuery {
    transfers(first: 1000, where: {blockTimestamp_gte: "${startTimestamp}", blockTimestamp_lte: "${stopTimestamp}"}) {
      id
    }
  }`;

  try {
    // Make the request
    const response = await axios.post(
      endpoint,
      { query },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer 93fa4c2400834278ed5a4a6ad58ce31e`, // Replace with your actual API key if needed
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching total transfers:', error);
    return null;
  }
}
