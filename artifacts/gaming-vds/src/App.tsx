import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import PaymentSuccess from "@/pages/payment-success";
import PaymentFail from "@/pages/payment-fail";
import GizlilikPolitikasi from "@/pages/gizlilik-politikasi";
import MesafeliSatisSozlesmesi from "@/pages/mesafeli-satis-sozlesmesi";
import IadeIptal from "@/pages/iade-iptal";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/odeme-basarili" component={PaymentSuccess} />
      <Route path="/odeme-basarisiz" component={PaymentFail} />
      <Route path="/gizlilik-politikasi" component={GizlilikPolitikasi} />
      <Route path="/mesafeli-satis-sozlesmesi" component={MesafeliSatisSozlesmesi} />
      <Route path="/iade-iptal" component={IadeIptal} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
