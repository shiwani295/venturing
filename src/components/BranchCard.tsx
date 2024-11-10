"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";

const BranchCard = () => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get(
          "https://ayanexcrm-backend.onrender.com/api/getAllBranches"
        );
        setBranches(response.data);
        toast.success("Branches fetched successfully!"); 
      } catch (error) {
        console.error("Error fetching branches:", error);
        toast.error("Failed to fetch branches. Please try again."); 
      }
    };
    fetchBranches();
  }, []);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Branch Name</TableHead>
            <TableHead>Branch Location</TableHead>
            <TableHead>Branch Logo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {branches.length > 0 ? (
            branches.map((branch) => (
              <TableRow key={branch._id}>
                <TableCell className="font-medium">
                  {branch.branchName}
                </TableCell>
                <TableCell>{branch.branchLocation}</TableCell>
                <TableCell>
                  <Image
                    src={`${branch.branchLogo}`}
                    alt={`${branch.branchName} logo`}
                    width={50}
                    height={50}
                    className="w-auto h-full"
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-4">
                No Data Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default BranchCard;
