import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

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
      <CustomersTable customers={customers} />
    </main>
  );
}
