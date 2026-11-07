import { getAffiliatePartner } from "@/lib/affiliate";

type VendorActionLinkProps = {
  softwareSlug: string;
  officialUrl: string;
  className: string;
  children: React.ReactNode;
};

export default function VendorActionLink({
  softwareSlug,
  officialUrl,
  className,
  children,
}: VendorActionLinkProps) {
  const partner = getAffiliatePartner(softwareSlug);
  const href = partner?.url || officialUrl;

  return (
    <div className="flex flex-col items-start">
      <a
        href={href}
        target="_blank"
        rel={partner ? "sponsored nofollow noopener noreferrer" : "noopener noreferrer"}
        className={className}
        data-vendor-outbound="true"
        data-software-slug={softwareSlug}
        data-vendor-action="website"
        data-affiliate={partner ? "true" : undefined}
      >
        {children}
      </a>
      {partner && (
        <p className="mt-2 max-w-xs text-xs leading-5 text-[#6e6e73]" role="note">
          Affiliate link: {partner.disclosure}
        </p>
      )}
    </div>
  );
}
