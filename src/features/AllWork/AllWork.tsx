import React from 'react';
import Card from '../../components/atoms/Card.tsx';
import CustomCursor from '../../components/atoms/CustomCursor.tsx';
import Footer from '../../components/atoms/Footer.tsx';

interface AllWorkProps {
  selectedCategory: string | null; // Add a prop to receive the selected category
}

const AllWork: React.FC<AllWorkProps> = ({ selectedCategory }) => {
  const workData = [
    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/1.jpg',
      title: 'Patchi',
      description: 'A contemporary luxury chocolate worlds experience shaped by passion and sparked by innovation. The creation of newness mixed with heritage, savior-faire, quality, and chefmanship.',
      categories: ['Corporate', 'E-commerce', 'Mobile App'], // Changed to 'E-commerce'
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/15.webp',
      title: 'AC Care',
      description: 'AC Care is your most experienced Apple Authorized Service Provider in Saudi Arabia.',
      categories: ['Corporate'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/6.jpg',
      title: 'Unigaz',
      description: 'Unigaz was the first company to introduce the LPG industry in Lebanon and all gas services.',
      categories: ['Corporate', 'Mobile App'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/5.jpg',
      title: 'Cape Insurance',
      description: 'Cape carefully assesses risk from an insurance standpoint and provides comprehensive services including cover design or selection, contract broking, and claims handling.',
      categories: ['Corporate', 'Web App'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/8.jpg',
      title: 'Fashion Store',
      description: 'A modern e-commerce platform offering stylish fashion and accessories for men and women.',
      categories: ['E-commerce', 'Web App'], // Changed to 'E-commerce'
    },
    ////////////////////////////////////////////////////////////////////////
    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/2.jpg',
      title: 'Artists & More',
      description: 'Artists & More is an entertainment company that wanted to create a platform that would connect artists, customers, and event-goers.',
      categories: [ 'Corporate'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/9.jpg',
      title: 'Ticketing - Artists & More',
      description: 'This ticketing platform is made for the users to have an idea about the latest events made by artists & more.',
      categories: [ 'Corporate','Mobile App'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/12.jpg',
      title: ' Qareb',
      description: 'Qareb business model concept is built on providing the products and services through different vendors, shops and individuals including Qareb.com itself.',
      categories: [ 'Corporate',' E-commerce','Mobile App'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/13.jpg',
      title: 'NHRC - National Human Rights Commission',
      description: 'The United Nations has defined a wide range of internationally recognized rights, including civil, cultural, economic, political and social rights. It also established mechanisms to promote and protect.',
      categories: [ 'Corporate'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/3.jpg',
      title: 'Mauidy Apps',
      description: 'Mauidy is an appointment booking company that operates in Saudi Arabia.',
      categories: [ 'Mobile App'],
    },

    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/11.jpg',
      title: 'Peer Square',
      description: 'Peer Square is a social space for learners to come together as a community, to connect and exchange knowledge and to own the learning process, and monitor progress.',
      categories: [ 'Corporate'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/4.jpg',
      title: '609 Experience',
      description: '609 Experience is a boutique agency based in Dubai, on a mission to find the order in chaos and the chaos in every day.',
      categories: [ 'Corporate'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/7.jpg',
      title: 'MyKenza',
      description: 'MyKenza is the multi-brand store in Lebanon offering products from a wide range of brands like Us Polo Assn, Ipekyol, Gerry Weber.',
      categories: [ 'Corporate', 'E-commerce'],
    },
    {

      image: 'https://thewebaddicts.com/storage/data/projects_banners/8.jpg',
      title: 'Flexxpay',
      description: 'Increase sales, productivity & retention. Save time & money. Financial security, dignity and savings for the millions experiencing financial stress.',
      categories: [ 'Corporate', 'Web App'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/10.jpg',
      title: 'Signor Sassi',
      description: 'Signor Sassi is a passionate family business that has become on of the leading Italian restaurants groups in the world.',
      categories: [ 'Corporate'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/18.jpg',
      title: 'K Stars',
      description: 'K Stars is a cosmetics brand that whispers glamorously into the trendsetting world and sells all kinds of makeup products.',
      categories: [ 'Corporate', 'E-commerce', 'Mobile App'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/14.jpg',
      title: 'Menorista',
      description: 'Menorista is an online fashion store based in Lebanon having both an e-commerce website and mobile app.',
      categories: [ 'Corporate', 'E-commerce', 'Mobile App'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_banners/13.jpg',
      title: 'Tarbiyah21',
      description: 'An online network for knowledge and experience exchange among educators in the Arab region and other parts of the world, joint initiative between the Regional Office of UNESCO and the Arab Thought Foundation.',
      categories: [ 'Corporate'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/20.jpg',
      title: 'Hernada',
      description: 'Hernada offers a comprehensive online shopping experience for lingerie, nightwear, beachwear, and resortwear.',
      categories: [ 'E-commerce'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/21.jpg',
      title: 'BeMA Museum',
      description: 'The BeMA website is designed to be a comprehensive resource for anyone interested in learning more about the museum and its work. It is also a way for the museum to connect with the public and build excitement for its upcoming opening. It is also a way for people to donate to the museum..',
      categories: [ 'Corporate'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/22.jpg',
      title: 'Camealeon',
      description: 'The Camealeon website is a comprehensive resource for anyone interested in learning more about the organization and its work. The website features information about the organizations mission, projects, publications, and more. Visitors can also use the website to sign up for the organizations mailing list or to contact the organization directly.',
      categories: [ 'Corporate'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/23.jpg',
      title: 'CATHI',
      description: ' CATHI is a privately held, German technology driven company that has been dedicated to developing highly innovative, breakthrough endovascular simulation technologies for over 20 years.',
      categories: [ 'Corporate'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/24.jpg',
      title: 'Kadmous',
      description: ' Kadmous is a Lebanese company that sells toys and games for children. The companys website is designed to be a comprehensive resource for parents and educators who are looking for high-quality educational toys and games. The website features information about the companys products, as well as articles and resources about early childhood education.',
      categories: [ 'E-commerce'],
    },
    {      
     
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/25.jpg',
      title: 'Konstruction Konsultorio LTD',
      description: 'KONSTRUCTION KONSULTORIO LTD is an Engineering Consulting firm, established in Cyprus and serving its clients around the world in the construction Industry. We are a group of high-caliber Engineers, Architects, Designers and AI experts, teamed up to offer the best and ultimate solutions for our customers.',
      categories: [ 'Corporate'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/26.jpg',
      title: 'One Tech Capital',
      description: ' One Tech Capital brings together a diverse talent from around the world under one roof, building innovative startups aimed to transform industries.',
      categories: [ 'Corporate'],
    },
    {
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/27.jpg',
      title: 'JouéClub',
      description: 'JouéClub Lebanon is a premier toy retailer dedicated to providing high-quality toys, games, and activities for children of all ages. With over 30 years of experience in the toy industry, we have built a reputation for excellence and customer satisfaction..',
      categories: [ ' E-commerce'],
    },
     {
      image: 'https://thewebaddicts.com/storage/data/projects_card_banners/28.jpg',
      title: 'Caremart',
      description: 'Caremart is an online pharmacy and beauty store based in Lebanon, catering to customers worldwide with an extensive range of beauty and skincare products, vitamins, supplements, and medical devices for sale or rent.',
     categories: [ 'E-commerce' ,'Mobile App'],
    },
  ];

  // Filter workData based on the selected category
  const filteredWork = selectedCategory
    ? workData.filter(work => work.categories.includes(selectedCategory))
    : workData; // If no category is selected, show all work

  return (
    <div className="bg-white min-h-screen relative">
      <CustomCursor /> {/* Custom Cursor */}
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredWork.map((work, index) => (
          <Card
            key={index}
            image={work.image}
            title={work.title}
            description={work.description}
            categories={work.categories}
          />
        ))}
      </div>

      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default AllWork;
