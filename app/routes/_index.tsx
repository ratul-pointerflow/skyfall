import { defer, type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { Await, useLoaderData, Link, type MetaFunction } from '@remix-run/react';
import { Suspense } from 'react';
import { Image, Money } from '@shopify/hydrogen';
import type {
  FeaturedCollectionFragment,
  RecommendedProductsQuery,
} from 'storefrontapi.generated';
import HomeBanner from '~/components/sections/HomeBanner';
import Paralex from '~/components/sections/Paralex';
import ProductSlider from '~/components/sections/ProductSlider';
import CollectionGrid from '~/components/sections/CollectionGrid';
import Discount from '~/components/sections/Discount';
import Video from '~/components/sections/Video';
import FeaturedCollectionSlider from '~/components/sections/FeaturedCollectionSlider';
import ImageWithText from '~/components/sections/ImageWithText';
import Reviews from '~/components/sections/Reviews';
import Discover from '~/components/sections/Discover';
import Faq from '~/components/sections/Faq';
import Newsletter from '~/components/sections/Newsletter';
import FeaturedBlogs from '~/components/sections/FeaturedBlogs';
import Gellary from '~/components/sections/Gellary';

export const meta: MetaFunction = () => {
  return [{ title: 'Hydrogen | Home' }];
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return defer({ ...deferredData, ...criticalData });
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({ context }: LoaderFunctionArgs) {
  const [{ collections }] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({ context }: LoaderFunctionArgs) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="home">
      <HomeBanner />
      <ProductSlider products={data.recommendedProducts} sectionNumber={1} />
      <Paralex />
      <CollectionGrid />
      <Discount />
      <ProductSlider products={data.recommendedProducts} sectionNumber={2} />
      <Video />
      <FeaturedCollectionSlider products={data.recommendedProducts} sectionNumber={1} />
      <ProductSlider products={data.recommendedProducts} sectionNumber={3} />
      <ImageWithText />
      <Reviews sectionNumber={1} />
      <Discover />
      <Faq />
      <Newsletter />
      <FeaturedBlogs />
      <Gellary />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    descriptionHtml
    handle
    tags
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 10, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;

const COLLECTION_BY_NAME_QUERY = `#graphql
  fragment CollectionProduct on Product {
    id
    title
    descriptionHtml
    handle
    tags
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query CollectionByName($collectionHandle: String!, $country: CountryCode, $language: LanguageCode) 
    @inContext(country: $country, language: $language) {
    collection(handle: $collectionHandle) {
      title
      handle
      products(first: 10, sortKey: UPDATED_AT, reverse: true) {
        nodes {
          ...CollectionProduct
        }
      }
    }
  }
` as const;
