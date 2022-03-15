//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
import { gql } from 'tinacms';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
  form: Scalars['JSON'];
  values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getDocumentFields: Scalars['JSON'];
  getPostsDocument: PostsDocument;
  getPostsList: PostsConnection;
  getGlobalDocument: GlobalDocument;
  getGlobalList: GlobalConnection;
  getAuthorsDocument: AuthorsDocument;
  getAuthorsList: AuthorsConnection;
  getPagesDocument: PagesDocument;
  getPagesList: PagesConnection;
};


export type QueryGetCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetPostsDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetPostsListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetGlobalDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetGlobalListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetAuthorsDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetAuthorsListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetPagesDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetPagesListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type DocumentNode = PostsDocument | GlobalDocument | AuthorsDocument | PagesDocument;

export type PostsAuthorDocument = AuthorsDocument;

export type Posts = {
  __typename?: 'Posts';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<PostsAuthorDocument>;
  date?: Maybe<Scalars['String']>;
  heroImg?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PostsDocument = Node & Document & {
  __typename?: 'PostsDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Posts;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type PostsConnectionEdges = {
  __typename?: 'PostsConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PostsDocument>;
};

export type PostsConnection = Connection & {
  __typename?: 'PostsConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PostsConnectionEdges>>>;
};

export type GlobalHeaderIcon = {
  __typename?: 'GlobalHeaderIcon';
  color?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GlobalHeaderNav = {
  __typename?: 'GlobalHeaderNav';
  href?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type GlobalHeader = {
  __typename?: 'GlobalHeader';
  icon?: Maybe<GlobalHeaderIcon>;
  color?: Maybe<Scalars['String']>;
  nav?: Maybe<Array<Maybe<GlobalHeaderNav>>>;
};

export type GlobalFooterSocial = {
  __typename?: 'GlobalFooterSocial';
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
};

export type GlobalFooter = {
  __typename?: 'GlobalFooter';
  color?: Maybe<Scalars['String']>;
  social?: Maybe<GlobalFooterSocial>;
};

export type GlobalTheme = {
  __typename?: 'GlobalTheme';
  color?: Maybe<Scalars['String']>;
  font?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  darkMode?: Maybe<Scalars['String']>;
};

export type Global = {
  __typename?: 'Global';
  header?: Maybe<GlobalHeader>;
  footer?: Maybe<GlobalFooter>;
  theme?: Maybe<GlobalTheme>;
};

export type GlobalDocument = Node & Document & {
  __typename?: 'GlobalDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Global;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type GlobalConnectionEdges = {
  __typename?: 'GlobalConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<GlobalDocument>;
};

export type GlobalConnection = Connection & {
  __typename?: 'GlobalConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<GlobalConnectionEdges>>>;
};

export type Authors = {
  __typename?: 'Authors';
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type AuthorsDocument = Node & Document & {
  __typename?: 'AuthorsDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Authors;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type AuthorsConnectionEdges = {
  __typename?: 'AuthorsConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<AuthorsDocument>;
};

export type AuthorsConnection = Connection & {
  __typename?: 'AuthorsConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<AuthorsConnectionEdges>>>;
};

export type PagesBlocksHeroActions = {
  __typename?: 'PagesBlocksHeroActions';
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['Boolean']>;
  link?: Maybe<Scalars['String']>;
};

export type PagesBlocksHeroImage = {
  __typename?: 'PagesBlocksHeroImage';
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type PagesBlocksHero = {
  __typename?: 'PagesBlocksHero';
  tagline?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actions?: Maybe<Array<Maybe<PagesBlocksHeroActions>>>;
  image?: Maybe<PagesBlocksHeroImage>;
  color?: Maybe<Scalars['String']>;
};

export type PagesBlocksFeaturesItemsIcon = {
  __typename?: 'PagesBlocksFeaturesItemsIcon';
  color?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type PagesBlocksFeaturesItems = {
  __typename?: 'PagesBlocksFeaturesItems';
  icon?: Maybe<PagesBlocksFeaturesItemsIcon>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PagesBlocksFeatures = {
  __typename?: 'PagesBlocksFeatures';
  items?: Maybe<Array<Maybe<PagesBlocksFeaturesItems>>>;
  color?: Maybe<Scalars['String']>;
};

export type PagesBlocksContent = {
  __typename?: 'PagesBlocksContent';
  body?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type PagesBlocksTestimonial = {
  __typename?: 'PagesBlocksTestimonial';
  quote?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type PagesBlocks = PagesBlocksHero | PagesBlocksFeatures | PagesBlocksContent | PagesBlocksTestimonial;

export type Pages = {
  __typename?: 'Pages';
  blocks?: Maybe<Array<Maybe<PagesBlocks>>>;
};

export type PagesDocument = Node & Document & {
  __typename?: 'PagesDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Pages;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type PagesConnectionEdges = {
  __typename?: 'PagesConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PagesDocument>;
};

export type PagesConnection = Connection & {
  __typename?: 'PagesConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PagesConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  createDocument: DocumentNode;
  updatePostsDocument: PostsDocument;
  createPostsDocument: PostsDocument;
  updateGlobalDocument: GlobalDocument;
  createGlobalDocument: GlobalDocument;
  updateAuthorsDocument: AuthorsDocument;
  createAuthorsDocument: AuthorsDocument;
  updatePagesDocument: PagesDocument;
  createPagesDocument: PagesDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdatePostsDocumentArgs = {
  relativePath: Scalars['String'];
  params: PostsMutation;
};


export type MutationCreatePostsDocumentArgs = {
  relativePath: Scalars['String'];
  params: PostsMutation;
};


export type MutationUpdateGlobalDocumentArgs = {
  relativePath: Scalars['String'];
  params: GlobalMutation;
};


export type MutationCreateGlobalDocumentArgs = {
  relativePath: Scalars['String'];
  params: GlobalMutation;
};


export type MutationUpdateAuthorsDocumentArgs = {
  relativePath: Scalars['String'];
  params: AuthorsMutation;
};


export type MutationCreateAuthorsDocumentArgs = {
  relativePath: Scalars['String'];
  params: AuthorsMutation;
};


export type MutationUpdatePagesDocumentArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};


export type MutationCreatePagesDocumentArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};

export type DocumentMutation = {
  posts?: InputMaybe<PostsMutation>;
  global?: InputMaybe<GlobalMutation>;
  authors?: InputMaybe<AuthorsMutation>;
  pages?: InputMaybe<PagesMutation>;
};

export type PostsMutation = {
  title?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  heroImg?: InputMaybe<Scalars['String']>;
  excerpt?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
};

export type GlobalHeaderIconMutation = {
  color?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GlobalHeaderNavMutation = {
  href?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

export type GlobalHeaderMutation = {
  icon?: InputMaybe<GlobalHeaderIconMutation>;
  color?: InputMaybe<Scalars['String']>;
  nav?: InputMaybe<Array<InputMaybe<GlobalHeaderNavMutation>>>;
};

export type GlobalFooterSocialMutation = {
  facebook?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
};

export type GlobalFooterMutation = {
  color?: InputMaybe<Scalars['String']>;
  social?: InputMaybe<GlobalFooterSocialMutation>;
};

export type GlobalThemeMutation = {
  color?: InputMaybe<Scalars['String']>;
  font?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  darkMode?: InputMaybe<Scalars['String']>;
};

export type GlobalMutation = {
  header?: InputMaybe<GlobalHeaderMutation>;
  footer?: InputMaybe<GlobalFooterMutation>;
  theme?: InputMaybe<GlobalThemeMutation>;
};

export type AuthorsMutation = {
  name?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksHeroActionsMutation = {
  label?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksHeroImageMutation = {
  src?: InputMaybe<Scalars['String']>;
  alt?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksHeroMutation = {
  tagline?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  actions?: InputMaybe<Array<InputMaybe<PagesBlocksHeroActionsMutation>>>;
  image?: InputMaybe<PagesBlocksHeroImageMutation>;
  color?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksFeaturesItemsIconMutation = {
  color?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksFeaturesItemsMutation = {
  icon?: InputMaybe<PagesBlocksFeaturesItemsIconMutation>;
  title?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PagesBlocksFeaturesMutation = {
  items?: InputMaybe<Array<InputMaybe<PagesBlocksFeaturesItemsMutation>>>;
  color?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksContentMutation = {
  body?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksTestimonialMutation = {
  quote?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
};

export type PagesBlocksMutation = {
  hero?: InputMaybe<PagesBlocksHeroMutation>;
  features?: InputMaybe<PagesBlocksFeaturesMutation>;
  content?: InputMaybe<PagesBlocksContentMutation>;
  testimonial?: InputMaybe<PagesBlocksTestimonialMutation>;
};

export type PagesMutation = {
  blocks?: InputMaybe<Array<InputMaybe<PagesBlocksMutation>>>;
};

export type PostsPartsFragment = { __typename?: 'Posts', title?: string | null, date?: string | null, heroImg?: string | null, excerpt?: string | null, body?: string | null, author?: { __typename?: 'AuthorsDocument', id: string } | null };

export type GlobalPartsFragment = { __typename?: 'Global', header?: { __typename: 'GlobalHeader', color?: string | null, icon?: { __typename: 'GlobalHeaderIcon', color?: string | null, style?: string | null, name?: string | null } | null, nav?: Array<{ __typename: 'GlobalHeaderNav', href?: string | null, label?: string | null } | null> | null } | null, footer?: { __typename: 'GlobalFooter', color?: string | null, social?: { __typename: 'GlobalFooterSocial', facebook?: string | null, twitter?: string | null, instagram?: string | null, github?: string | null } | null } | null, theme?: { __typename: 'GlobalTheme', color?: string | null, font?: string | null, icon?: string | null, darkMode?: string | null } | null };

export type AuthorsPartsFragment = { __typename?: 'Authors', name?: string | null, avatar?: string | null };

export type PagesPartsFragment = { __typename?: 'Pages', blocks?: Array<{ __typename: 'PagesBlocksHero', tagline?: string | null, headline?: string | null, text?: string | null, color?: string | null, actions?: Array<{ __typename: 'PagesBlocksHeroActions', label?: string | null, type?: string | null, icon?: boolean | null, link?: string | null } | null> | null, image?: { __typename: 'PagesBlocksHeroImage', src?: string | null, alt?: string | null } | null } | { __typename: 'PagesBlocksFeatures', color?: string | null, items?: Array<{ __typename: 'PagesBlocksFeaturesItems', title?: string | null, text?: string | null, tags?: Array<string | null> | null, icon?: { __typename: 'PagesBlocksFeaturesItemsIcon', color?: string | null, style?: string | null, name?: string | null } | null } | null> | null } | { __typename: 'PagesBlocksContent', body?: string | null, color?: string | null } | { __typename: 'PagesBlocksTestimonial', quote?: string | null, author?: string | null, color?: string | null } | null> | null };

export type GetPostsDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetPostsDocumentQuery = { __typename?: 'Query', getPostsDocument: { __typename?: 'PostsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Posts', title?: string | null, date?: string | null, heroImg?: string | null, excerpt?: string | null, body?: string | null, author?: { __typename?: 'AuthorsDocument', id: string } | null } } };

export type GetPostsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsListQuery = { __typename?: 'Query', getPostsList: { __typename?: 'PostsConnection', totalCount: number, edges?: Array<{ __typename?: 'PostsConnectionEdges', node?: { __typename?: 'PostsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Posts', title?: string | null, date?: string | null, heroImg?: string | null, excerpt?: string | null, body?: string | null, author?: { __typename?: 'AuthorsDocument', id: string } | null } } | null } | null> | null } };

export type GetGlobalDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetGlobalDocumentQuery = { __typename?: 'Query', getGlobalDocument: { __typename?: 'GlobalDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Global', header?: { __typename: 'GlobalHeader', color?: string | null, icon?: { __typename: 'GlobalHeaderIcon', color?: string | null, style?: string | null, name?: string | null } | null, nav?: Array<{ __typename: 'GlobalHeaderNav', href?: string | null, label?: string | null } | null> | null } | null, footer?: { __typename: 'GlobalFooter', color?: string | null, social?: { __typename: 'GlobalFooterSocial', facebook?: string | null, twitter?: string | null, instagram?: string | null, github?: string | null } | null } | null, theme?: { __typename: 'GlobalTheme', color?: string | null, font?: string | null, icon?: string | null, darkMode?: string | null } | null } } };

export type GetGlobalListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGlobalListQuery = { __typename?: 'Query', getGlobalList: { __typename?: 'GlobalConnection', totalCount: number, edges?: Array<{ __typename?: 'GlobalConnectionEdges', node?: { __typename?: 'GlobalDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Global', header?: { __typename: 'GlobalHeader', color?: string | null, icon?: { __typename: 'GlobalHeaderIcon', color?: string | null, style?: string | null, name?: string | null } | null, nav?: Array<{ __typename: 'GlobalHeaderNav', href?: string | null, label?: string | null } | null> | null } | null, footer?: { __typename: 'GlobalFooter', color?: string | null, social?: { __typename: 'GlobalFooterSocial', facebook?: string | null, twitter?: string | null, instagram?: string | null, github?: string | null } | null } | null, theme?: { __typename: 'GlobalTheme', color?: string | null, font?: string | null, icon?: string | null, darkMode?: string | null } | null } } | null } | null> | null } };

export type GetAuthorsDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetAuthorsDocumentQuery = { __typename?: 'Query', getAuthorsDocument: { __typename?: 'AuthorsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Authors', name?: string | null, avatar?: string | null } } };

export type GetAuthorsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorsListQuery = { __typename?: 'Query', getAuthorsList: { __typename?: 'AuthorsConnection', totalCount: number, edges?: Array<{ __typename?: 'AuthorsConnectionEdges', node?: { __typename?: 'AuthorsDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Authors', name?: string | null, avatar?: string | null } } | null } | null> | null } };

export type GetPagesDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetPagesDocumentQuery = { __typename?: 'Query', getPagesDocument: { __typename?: 'PagesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Pages', blocks?: Array<{ __typename: 'PagesBlocksHero', tagline?: string | null, headline?: string | null, text?: string | null, color?: string | null, actions?: Array<{ __typename: 'PagesBlocksHeroActions', label?: string | null, type?: string | null, icon?: boolean | null, link?: string | null } | null> | null, image?: { __typename: 'PagesBlocksHeroImage', src?: string | null, alt?: string | null } | null } | { __typename: 'PagesBlocksFeatures', color?: string | null, items?: Array<{ __typename: 'PagesBlocksFeaturesItems', title?: string | null, text?: string | null, tags?: Array<string | null> | null, icon?: { __typename: 'PagesBlocksFeaturesItemsIcon', color?: string | null, style?: string | null, name?: string | null } | null } | null> | null } | { __typename: 'PagesBlocksContent', body?: string | null, color?: string | null } | { __typename: 'PagesBlocksTestimonial', quote?: string | null, author?: string | null, color?: string | null } | null> | null } } };

export type GetPagesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPagesListQuery = { __typename?: 'Query', getPagesList: { __typename?: 'PagesConnection', totalCount: number, edges?: Array<{ __typename?: 'PagesConnectionEdges', node?: { __typename?: 'PagesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Pages', blocks?: Array<{ __typename: 'PagesBlocksHero', tagline?: string | null, headline?: string | null, text?: string | null, color?: string | null, actions?: Array<{ __typename: 'PagesBlocksHeroActions', label?: string | null, type?: string | null, icon?: boolean | null, link?: string | null } | null> | null, image?: { __typename: 'PagesBlocksHeroImage', src?: string | null, alt?: string | null } | null } | { __typename: 'PagesBlocksFeatures', color?: string | null, items?: Array<{ __typename: 'PagesBlocksFeaturesItems', title?: string | null, text?: string | null, tags?: Array<string | null> | null, icon?: { __typename: 'PagesBlocksFeaturesItemsIcon', color?: string | null, style?: string | null, name?: string | null } | null } | null> | null } | { __typename: 'PagesBlocksContent', body?: string | null, color?: string | null } | { __typename: 'PagesBlocksTestimonial', quote?: string | null, author?: string | null, color?: string | null } | null> | null } } | null } | null> | null } };

export const PostsPartsFragmentDoc = gql`
    fragment PostsParts on Posts {
  title
  author {
    ... on Document {
      id
    }
  }
  date
  heroImg
  excerpt
  body
}
    `;
export const GlobalPartsFragmentDoc = gql`
    fragment GlobalParts on Global {
  header {
    __typename
    icon {
      __typename
      color
      style
      name
    }
    color
    nav {
      __typename
      href
      label
    }
  }
  footer {
    __typename
    color
    social {
      __typename
      facebook
      twitter
      instagram
      github
    }
  }
  theme {
    __typename
    color
    font
    icon
    darkMode
  }
}
    `;
export const AuthorsPartsFragmentDoc = gql`
    fragment AuthorsParts on Authors {
  name
  avatar
}
    `;
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  blocks {
    __typename
    ... on PagesBlocksHero {
      tagline
      headline
      text
      actions {
        __typename
        label
        type
        icon
        link
      }
      image {
        __typename
        src
        alt
      }
      color
    }
    ... on PagesBlocksFeatures {
      items {
        __typename
        icon {
          __typename
          color
          style
          name
        }
        title
        text
        tags
      }
      color
    }
    ... on PagesBlocksContent {
      body
      color
    }
    ... on PagesBlocksTestimonial {
      quote
      author
      color
    }
  }
}
    `;
export const GetPostsDocumentDocument = gql`
    query getPostsDocument($relativePath: String!) {
  getPostsDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...PostsParts
    }
  }
}
    ${PostsPartsFragmentDoc}`;
export const GetPostsListDocument = gql`
    query getPostsList {
  getPostsList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...PostsParts
        }
      }
    }
  }
}
    ${PostsPartsFragmentDoc}`;
export const GetGlobalDocumentDocument = gql`
    query getGlobalDocument($relativePath: String!) {
  getGlobalDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...GlobalParts
    }
  }
}
    ${GlobalPartsFragmentDoc}`;
export const GetGlobalListDocument = gql`
    query getGlobalList {
  getGlobalList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...GlobalParts
        }
      }
    }
  }
}
    ${GlobalPartsFragmentDoc}`;
export const GetAuthorsDocumentDocument = gql`
    query getAuthorsDocument($relativePath: String!) {
  getAuthorsDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...AuthorsParts
    }
  }
}
    ${AuthorsPartsFragmentDoc}`;
export const GetAuthorsListDocument = gql`
    query getAuthorsList {
  getAuthorsList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...AuthorsParts
        }
      }
    }
  }
}
    ${AuthorsPartsFragmentDoc}`;
export const GetPagesDocumentDocument = gql`
    query getPagesDocument($relativePath: String!) {
  getPagesDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...PagesParts
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export const GetPagesListDocument = gql`
    query getPagesList {
  getPagesList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...PagesParts
        }
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      getPostsDocument(variables: GetPostsDocumentQueryVariables, options?: C): Promise<{data: GetPostsDocumentQuery, variables: GetPostsDocumentQueryVariables, query: string}> {
        return requester<{data: GetPostsDocumentQuery, variables: GetPostsDocumentQueryVariables, query: string}, GetPostsDocumentQueryVariables>(GetPostsDocumentDocument, variables, options);
      },
    getPostsList(variables?: GetPostsListQueryVariables, options?: C): Promise<{data: GetPostsListQuery, variables: GetPostsListQueryVariables, query: string}> {
        return requester<{data: GetPostsListQuery, variables: GetPostsListQueryVariables, query: string}, GetPostsListQueryVariables>(GetPostsListDocument, variables, options);
      },
    getGlobalDocument(variables: GetGlobalDocumentQueryVariables, options?: C): Promise<{data: GetGlobalDocumentQuery, variables: GetGlobalDocumentQueryVariables, query: string}> {
        return requester<{data: GetGlobalDocumentQuery, variables: GetGlobalDocumentQueryVariables, query: string}, GetGlobalDocumentQueryVariables>(GetGlobalDocumentDocument, variables, options);
      },
    getGlobalList(variables?: GetGlobalListQueryVariables, options?: C): Promise<{data: GetGlobalListQuery, variables: GetGlobalListQueryVariables, query: string}> {
        return requester<{data: GetGlobalListQuery, variables: GetGlobalListQueryVariables, query: string}, GetGlobalListQueryVariables>(GetGlobalListDocument, variables, options);
      },
    getAuthorsDocument(variables: GetAuthorsDocumentQueryVariables, options?: C): Promise<{data: GetAuthorsDocumentQuery, variables: GetAuthorsDocumentQueryVariables, query: string}> {
        return requester<{data: GetAuthorsDocumentQuery, variables: GetAuthorsDocumentQueryVariables, query: string}, GetAuthorsDocumentQueryVariables>(GetAuthorsDocumentDocument, variables, options);
      },
    getAuthorsList(variables?: GetAuthorsListQueryVariables, options?: C): Promise<{data: GetAuthorsListQuery, variables: GetAuthorsListQueryVariables, query: string}> {
        return requester<{data: GetAuthorsListQuery, variables: GetAuthorsListQueryVariables, query: string}, GetAuthorsListQueryVariables>(GetAuthorsListDocument, variables, options);
      },
    getPagesDocument(variables: GetPagesDocumentQueryVariables, options?: C): Promise<{data: GetPagesDocumentQuery, variables: GetPagesDocumentQueryVariables, query: string}> {
        return requester<{data: GetPagesDocumentQuery, variables: GetPagesDocumentQueryVariables, query: string}, GetPagesDocumentQueryVariables>(GetPagesDocumentDocument, variables, options);
      },
    getPagesList(variables?: GetPagesListQueryVariables, options?: C): Promise<{data: GetPagesListQuery, variables: GetPagesListQueryVariables, query: string}> {
        return requester<{data: GetPagesListQuery, variables: GetPagesListQueryVariables, query: string}, GetPagesListQueryVariables>(GetPagesListDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { staticRequest } from 'tinacms'
const requester: (doc: any, vars?: any, options?: any) => Promise<any> = async (
  doc,
  vars,
  _options
) => {
  let data = {}
  try {
    data = await staticRequest({
      query: doc,
      variables: vars,
    })
  } catch (e) {
    // swallow errors related to document creation
    console.warn('Warning: There was an error when fetching data')
    console.warn(e)
  }

  return { data, query: doc, variables: vars || {} }
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = ()=>getSdk(requester)

