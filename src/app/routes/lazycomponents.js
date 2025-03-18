import { lazy } from "react";

export const Home = lazy(() => import('../../components/pages/home/Home'))

export const About = lazy(() => import('../pages/about/About'))

export const Contact = lazy(() => import('../pages/contact/Contact'))

export const Gallery = lazy(() => import('../pages/gallery/Gallery'))

export const Menu = lazy(() => import('../pages/menu/Menu'))
