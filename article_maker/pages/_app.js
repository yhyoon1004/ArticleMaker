// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/articleMakerCustomStyle.css'
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

export default function App({Component, pageProps}) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools/>
        </QueryClientProvider>
    )
}
