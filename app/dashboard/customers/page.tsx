import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { inter } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { CustomersTableSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = { title: "Customers" };

type SearchParams = Promise<{
  query?: string | string[];
  page?: string | string[];
}>;

export default async function Page({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const sp = (await searchParams) ?? {};

  const query = Array.isArray(sp.query) ? sp.query[0] ?? "" : sp.query ?? "";

  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <h1 className={`${inter.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <Suspense fallback={<CustomersTableSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </main>
  );
}
