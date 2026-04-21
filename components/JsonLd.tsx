/**
 * Renders arbitrary JSON-LD as a <script type="application/ld+json"> tag.
 * Use from any server component to attach schema.org data to a page.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
