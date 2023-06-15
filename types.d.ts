type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: '-37.3159';
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: 'Romaguera-Crona';
    catchPhrase: string;
    bs: string;
  };
};

type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

type SearchResult = {
  query?: {
    pages?: Result[];
  };
};

type BlogPost = {
  id: string;
  title: string;
  date: string;
};

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

type IBlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
