import "./App.css";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { FC } from "react";
import Header from "./components/Header/Header";
import { useRoutes } from "react-router-dom";
import { routes } from "routes";
import SideBar from "components/Sidebar/SideBar";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { QueryClient, QueryClientProvider } from "react-query";
import { CurrentRepoProvider } from "utils/CurrentRepoContext/CurrentRepoContext";


import { currentRepo } from "local-state/local-state-var";


const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = "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";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          currentRepo: {
              read(value , inComming ){
                console.log("inComming" , inComming.variables)
                return currentRepo()
              }
          }
        },
      },
    },
  }),
});
const reactQueryClient = new QueryClient();

const App: FC = () => {
  const routeElement = useRoutes(routes);
  return (
    <div className="App">
      <CurrentRepoProvider>
        <QueryClientProvider client={reactQueryClient}>
          <ApolloProvider client={apolloClient}>
            <Layout>
              <SideBar />
              <Layout className="site-layout" style={{ marginLeft: 250 }}>
                <Header />
                {routeElement}
                <Layout.Footer style={{ textAlign: "center" }}>
                  Fun with Github ©2021 Created by 200lab
                </Layout.Footer>
              </Layout>
            </Layout>
          </ApolloProvider>
        </QueryClientProvider>
      </CurrentRepoProvider>
    </div>
  );
};

export default App;
