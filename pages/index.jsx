import styles from '../styles/Home.module.css'
import Post from '../components/Post';

const posts = 
[{
  likes: 5,
  title: "Biología",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quisquam autem tempora mollitia. Tempore magnam consectetur doloremque soluta sit voluptate atque illum sequi illo inventore, cupiditate impedit provident odio quam.",
  publishedAt: "7/8/2021"
},{
  likes: 8,
  title: "Matemática",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias accusantium ea vero vel harum aut accusamus architecto quos voluptates, aliquam itaque fuga qui perferendis quas corrupti incidunt ullam deserunt atque.",
  publishedAt: "5/4/2020"
},{
  likes: -3,
  title: "Futbol",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore mollitia eius culpa quae possimus officia est, doloribus vitae ipsam nemo aut, excepturi maiores voluptas molestias iste ad iusto minus laudantium.",
  publishedAt: "5/2/2003"
},{
  likes: 9,
  title: "Arqueología",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam soluta voluptate nisi odit iusto ab harum aut alias minima mollitia quas natus eveniet non, voluptatem quo impedit saepe asperiores eum!",
  publishedAt: "6/9/2039"
},{
  likes: 5,
  title: "Biología",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quisquam autem tempora mollitia. Tempore magnam consectetur doloremque soluta sit voluptate atque illum sequi illo inventore, cupiditate impedit provident odio quam.",
  publishedAt: "7/8/2021"
},{
  likes: 8,
  title: "Matemática",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias accusantium ea vero vel harum aut accusamus architecto quos voluptates, aliquam itaque fuga qui perferendis quas corrupti incidunt ullam deserunt atque.",
  publishedAt: "5/4/2020"
},{
  likes: -3,
  title: "Futbol",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore mollitia eius culpa quae possimus officia est, doloribus vitae ipsam nemo aut, excepturi maiores voluptas molestias iste ad iusto minus laudantium.",
  publishedAt: "5/2/2003"
},{
  likes: 9,
  title: "Arqueología",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam soluta voluptate nisi odit iusto ab harum aut alias minima mollitia quas natus eveniet non, voluptatem quo impedit saepe asperiores eum!",
  publishedAt: "6/9/2039"
},{
  likes: 5,
  title: "Biología",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quisquam autem tempora mollitia. Tempore magnam consectetur doloremque soluta sit voluptate atque illum sequi illo inventore, cupiditate impedit provident odio quam.",
  publishedAt: "7/8/2021"
},{
  likes: 8,
  title: "Matemática",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias accusantium ea vero vel harum aut accusamus architecto quos voluptates, aliquam itaque fuga qui perferendis quas corrupti incidunt ullam deserunt atque.",
  publishedAt: "5/4/2020"
},{
  likes: -3,
  title: "Futbol",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore mollitia eius culpa quae possimus officia est, doloribus vitae ipsam nemo aut, excepturi maiores voluptas molestias iste ad iusto minus laudantium.",
  publishedAt: "5/2/2003"
},{
  likes: 9,
  title: "Arqueología",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam soluta voluptate nisi odit iusto ab harum aut alias minima mollitia quas natus eveniet non, voluptatem quo impedit saepe asperiores eum!",
  publishedAt: "6/9/2039"
},{
  likes: 5,
  title: "Biología",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quisquam autem tempora mollitia. Tempore magnam consectetur doloremque soluta sit voluptate atque illum sequi illo inventore, cupiditate impedit provident odio quam.",
  publishedAt: "7/8/2021"
},{
  likes: 8,
  title: "Matemática",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias accusantium ea vero vel harum aut accusamus architecto quos voluptates, aliquam itaque fuga qui perferendis quas corrupti incidunt ullam deserunt atque.",
  publishedAt: "5/4/2020"
},{
  likes: -3,
  title: "Futbol",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore mollitia eius culpa quae possimus officia est, doloribus vitae ipsam nemo aut, excepturi maiores voluptas molestias iste ad iusto minus laudantium.",
  publishedAt: "5/2/2003"
},{
  likes: 9,
  title: "Arqueología",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam soluta voluptate nisi odit iusto ab harum aut alias minima mollitia quas natus eveniet non, voluptatem quo impedit saepe asperiores eum!",
  publishedAt: "6/9/2039"
}]

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.postContainer}>
      {posts.map((post,i) => {
        return <Post key={i} {...post} ></Post>
      })}
      </div>
    </main>
  )
}
