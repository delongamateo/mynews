type Multimedia = {
  caption: string;
  copyright: string;
  format: string;
  height: number;
  subtype: string;
  type: string;
  url: string;
  width: number;
};

type SearchMultimedia = {
  caption: string | null;
  credit: string | null;
  crop_name: string | null;
  height: number;
  legacy: {
    xlarge: string | null;
    xlargeheight: number;
    xlargewidth: number;
  };
  rank: number;
  subType: string | null;
  subtype: string | null;
  type: string | null;
  url: string | null;
  width: number;
};

type Person = {
  firstname: string;
  lastname: string;
  middlename: string | null;
  organization: string;
  qualifier: string | null;
  rank: number;
  role: string;
  title: string | null;
};

type Keyword = {
  major: string | null;
  name: string | null;
  rank: number;
  value: string | null;
};

export type Article = {
  abstract: string;
  byline: string;
  created_date: string;
  des_facet: string[];
  geo_facet: string[];
  item_type: string;
  kicker: string;
  material_type_facet: string;
  multimedia: Multimedia[];
  org_facet: string[];
  per_facet: string[];
  published_date: string;
  section: string;
  short_url: string;
  subsection: string;
  title: string;
  updated_date: string;
  uri: string;
  url: string;
};

/* delete */
export type SearchArticle = {
  abstract: string;
  byline: {
    organization: string;
    original: string;
    person: Person[];
  };
  document_type: string;
  headline: {
    content_kicker: string | null;
    kicker: string | null;
    main: string;
    name: string | null;
    print_headline: string | null;
    seo: string | null;
    sub: string | null;
  };
  keywords: Keyword[];
  lead_paragraph: string;
  multimedia: SearchMultimedia[];
  news_desk: string | null;
  pub_date: string | null;
  section_name: string | null;
  snippet: string | null;
  source: string | null;
  type_of_material: string | null;
  uri: string | null;
  web_url: string | null;
  word_count: number | null;
  _id: string | null;
};

export type Category = {
  name: string;
  icon: JSX.Element;
  value: string;
};
