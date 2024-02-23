import jSuites from "jsuites";
import React from "react";
 
import { useRef, useEffect } from "react";
 
import "jsuites/dist/jsuites.css";
 
export default function Calendar({ options }) {
  const calendarRef = useRef(null);
 
  useEffect(() => {
    jSuites.calendar(calendarRef.current, options);
  }, [options]);
 
  return <input ref={calendarRef} />;
}