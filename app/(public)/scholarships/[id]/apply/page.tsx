import ScholarshipForm from "@/app/components/scholarship-form";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ScholarshipApplicationForm = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
      const session = await auth.api.getSession({
          headers: await headers()
      })
  
      if (!session){
          redirect("/signin")
      }

  return (<div>
    <ScholarshipForm id={id}/>
  </div>);
};

export default ScholarshipApplicationForm;
