// import styled from "styled-components";
// import GlobalStyles from "./styles/GlobalStyles";
// const H1 = styled.h1`
//   font-size: 30px;
//   font-weight: 600;
//   text-align: center;
//   font-style: italic;
// `;
// const AppStyle = styled.div`
//   background-color: var(--color-brand-500);
//   height: 50px;
// `;
// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <AppStyle>
//         <H1>The Wild Oasis</H1>
//       </AppStyle>
//     </>
//   );
// }
// export default App;

// the wild oasis

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="account" element={<Account />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

// {
//     "status": true,
//     "message": "Success",
//     "data": {
//         "jobs": [
//
//
//             {
//                 "status": "Open",
//                 "locations": [
//                     "Bengaluru"
//                 ],
//                 "skills": [
//                     "Java",
//                     "TestNG",
//                     "Selenium",
//                     "Automation testing",
//                     "manual testing"
//                 ],
//                 "_id": "684acb00df66b7aba81e53dd",
//                 "title": "QA Testing",
//                 "type": "Full Time",
//                 "modeOfWork": "Onsite",
//                 "company": {
//                     "name": "Iopex Technologies",
//                     "linkedInURL": "https://www.linkedin.com/company/iopex-technologies/about/"
//                 },
//                 "jobOwner": "669ea47b2a8b73b90d8877d0",
//                 "jobId": 965,
//                 "createdAt": "2 days ago",
//                 "hasApplied": false,
//                 "createdAtTimeStamp": "2025-06-12T12:41:36.077Z",
//                 "ctcCurrency": "INR",
//                 "formattedSalary": "₹ 3.5L - 4L / year",
//                 "formattedExperience": "0 - 1 Years",
//                 "jobOwnername": "koushiksanju1919"
//             },
//             {
//                 "status": "Open",
//                 "locations": [
//                     "Remote"
//                 ],
//                 "skills": [
//                     "MongoDB",
//                     "Node.js",
//                     "React",
//                     "Javascript",
//                     "HTML&CSS"
//                 ],
//                 "_id": "684a9312df66b7aba81cd9e7",
//                 "title": "Full Stack Engineer",
//                 "type": "Full Time",
//                 "modeOfWork": "Remote",
//                 "company": {
//                     "name": "Skai Lama",
//                     "linkedInURL": "https://www.linkedin.com/company/skai-lama/"
//                 },
//                 "jobOwner": "6630952e7377668ea311bdd3",
//                 "jobId": 964,
//                 "createdAt": "2 days ago",
//                 "hasApplied": false,
//                 "createdAtTimeStamp": "2025-06-12T08:42:58.202Z",
//                 "ctcCurrency": "INR",
//                 "formattedSalary": "₹ 6L - 9L / year",
//                 "formattedExperience": "0 - 1 Years",
//                 "jobOwnername": "raveena"
//             },
//             {
//                 "status": "Open",
//                 "locations": [
//                     "Bengaluru"
//                 ],
//                 "skills": [
//                     "MERN",
//                     "Django"
//                 ],
//                 "_id": "684a8c1a2b494fa6c8c056bf",
//                 "title": "Fullstack Web Developer (MERN/Django)",
//                 "type": "Internship + PPO",
//                 "modeOfWork": "Onsite",
//                 "company": {
//                     "name": "Krishworks Technology Innovations",
//                     "linkedInURL": "https://www.linkedin.com/company/krishworks-technology-innovations/"
//                 },
//                 "jobOwner": "6630952e7377668ea311bdd3",
//                 "stipendRange": {
//                     "start": 25000,
//                     "end": 25000,
//                     "paymentFrequency": "Per Month",
//                     "currency": "INR"
//                 },
//                 "internshipDuration": {
//                     "duration": 6,
//                     "type": "Months"
//                 },
//                 "jobId": 963,
//                 "createdAt": "2 days ago",
//                 "hasApplied": false,
//                 "createdAtTimeStamp": "2025-06-12T08:13:14.806Z",
//                 "ctcCurrency": "INR",
//                 "formattedSalary": "₹ 5.5L / year",
//                 "stipendCurrency": "INR",
//                 "formattedStipend": "₹ 25K / month",
//                 "formattedExperience": "0 - 1 Years",
//                 "jobOwnername": "raveena"
//             },
//             {
//                 "status": "Open",
//                 "locations": [
//                     "Gurugram"
//                 ],
//                 "skills": [
//                     "Python",
//                     "AWS",
//                     "Microservices",
//                     "Web technologies",
//                     "JavaScript",
//                     "React.js",
//                     "Node.js",
//                     "AWS Cloud"
//                 ],
//                 "_id": "68498353a75883a194037aa6",
//                 "title": "Senior Software Engineer",
//                 "type": "Full Time",
//                 "modeOfWork": "Onsite",
//                 "company": {
//                     "name": "StrideOne",
//                     "linkedInURL": "https://www.linkedin.com/company/stride1/about/"
//                 },
//                 "jobOwner": "669ea47b2a8b73b90d8877d0",
//                 "jobId": 962,
//                 "createdAt": "3 days ago",
//                 "hasApplied": false,
//                 "createdAtTimeStamp": "2025-06-11T13:23:31.395Z",
//                 "ctcCurrency": "INR",
//                 "formattedSalary": "₹ 14L - 20L / year",
//                 "formattedExperience": "3 - 4 Years",
//                 "jobOwnername": "koushiksanju1919"
//             },
//             {
//                 "status": "Open",
//                 "locations": [
//                     "Bengaluru"
//                 ],
//                 "skills": [
//                     "Python",
//                     "AI/ML",
//                     "LLM",
//                     "NLP"
//                 ],
//                 "_id": "6849820e8fa29da19d2afb5f",
//                 "title": "AI Engineer",
//                 "type": "Full Time",
//                 "modeOfWork": "Onsite",
//                 "company": {
//                     "name": "OneByZero",
//                     "linkedInURL": "https://www.linkedin.com/company/1bz/"
//                 },
//                 "jobOwner": "6630952e7377668ea311bdd3",
//                 "jobId": 961,
//                 "createdAt": "3 days ago",
//                 "hasApplied": false,
//                 "createdAtTimeStamp": "2025-06-11T13:18:06.925Z",
//                 "ctcCurrency": "INR",
//                 "formattedSalary": "₹ 15L - 22L / year",
//                 "formattedExperience": "2 - 4 Years",
//                 "jobOwnername": "raveena"
//             }
//         ],
//         "total": 965,
//         "isAdmin": false,
//         "jobApplicationCountObj": {
//             "963": 47,
//             "964": 98,
//             "965": 39,
//             "967": 27,
//             "970": 29
//         },
//         "isUserEligible": true,
//         "jobLocations": [
//             "Remote",
//             "Hyderabad",
//             "Bengaluru",
//             "New Delhi",
//             "Noida",
//             "Gurugram",
//             "Mumbai",
//             "Pune",
//             "Ahmedabad",
//             "Delhi",
//             "Chennai",
//             "Nagpur"
//         ]
//     }
// }
