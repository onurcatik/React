import React from "react";
import ServiceCard from "./components/ServiceCard";
import { FcBusinessman } from "react-icons/fc";

function ServicePage() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl mb-8 text-center flex items-center justify-center">
        <FcBusinessman className="mr-2" /> Services
      </h1>
      <div className="md:flex justify-around">
        <ServiceCard
          image="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          text="Service 1"
          paragraph="Description for Service 1."
          buttonLabel="Read More"
        />
        <ServiceCard
          image="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          text="Service 2"
          paragraph="Description for Service 2."
          buttonLabel="Read More"
        />
        <ServiceCard
          image="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          text="Service 3"
          paragraph="Description for Service 3."
          buttonLabel="Read More"
        />
      </div>
    </div>
  );
}

export default ServicePage;