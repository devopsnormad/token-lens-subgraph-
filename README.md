
# TokenLens

**TokenLens** is a powerful tool built with React and subgraph technology to monitor and analyze transactions for four popular tokens: USDT, BNB, TRON, and SHIB. This project visualizes transaction data in a user-friendly interface with interactive cards and detailed views.

## Features

- **Token Cards**: Displays transaction totals of the current date for each token (USDT, BNB, TRON, SHIB) on individual cards.
- **Transaction Details**: Click on a token card to view a detailed list of transactions for that token.
- **Detailed View**: Click on a specific transaction to see its detailed information.
- **Bar Chart Visualization**: A dynamic bar chart shows the daily total transactions for each token, providing a clear comparison.

## Technologies Used

- **React**: A JavaScript library for creating interactive user interfaces, supporting both server-side rendering and static site generation.
- **Subgraph**: Used to pull transaction data from the blockchain, enabling real-time data updates and querying.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Jethrolopwus/cohort1subgraphDapp.git
   cd cohort1subgraphDapp
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Subgraph**
   We followed the instructions provided in the subgraph documentation [https://thegraph.com/docs/en/](https://thegraph.com/docs/en/) to configure and deploy our subgraph.

4. **Link to TokenLens Subgraph**
   - USDT: [https://api.studio.thegraph.com/query/87213/thegraph-bounty/version/latest](https://thegraph.com/studio/](https://api.studio.thegraph.com/query/87213/thegraph-bounty/version/latest)
   - TRX: [https://api.studio.thegraph.com/query/87213/thegraph-bounty-trx/version/latest](https://thegraph.com/studio/](https://api.studio.thegraph.com/query/87213/thegraph-bounty-trx/version/latest)
   - BNB: [https://api.studio.thegraph.com/query/87213/thegraph-bounty-bnb/version/latest](https://thegraph.com/studio/](https://api.studio.thegraph.com/query/87213/thegraph-bounty-bnb/version/latest)
   - SHIB: [https://api.studio.thegraph.com/query/87213/thegraph-bounty-shib/version/latest](https://thegraph.com/studio/](https://api.studio.thegraph.com/query/87213/thegraph-bounty-shib/version/latest)
   
5. **Run the Development Server**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

- **View Token Data**: The homepage displays cards for each token. Click on a card to see a detailed list of transactions for that token.
- **Transaction Details**: Click on any transaction to view detailed information.
- **Charts**: The bar chart on the homepage provides a visual comparison of total transactions for each token.

## Contributing

We welcome contributions to improve the TokenLens project. If you'd like to contribute, please fork the repository and create a pull request with your changes.

---
