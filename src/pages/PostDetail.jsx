import { useParams, Link, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";
import { FiClock, FiCalendar, FiTag, FiFolder, FiArrowLeft, FiShare2, FiBookmark } from "react-icons/fi";
import { useState } from "react";

export default function PostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const post = posts.find((p) => p.slug === slug);
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤔</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Bài viết không tồn tại</h1>
          <p className="text-gray-600 mb-6">Có thể bài viết đã bị xóa hoặc đường link không đúng.</p>
          <Link
            to="/posts"
            className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <FiArrowLeft className="mr-2 w-4 h-4" />
            Quay lại danh sách bài viết
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Đã copy link bài viết!');
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Implement bookmark functionality
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 py-6">
          <button
            onClick={() => navigate('/posts')}
            className="inline-flex items-center text-gray-600 hover:text-cyan-600 mb-6 transition-colors"
          >
            <FiArrowLeft className="mr-2 w-4 h-4" />
            Quay lại danh sách bài viết
          </button>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-medium flex items-center">
              <FiFolder className="w-3 h-3 mr-2" />
              {post.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <FiCalendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString('vi-VN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <FiClock className="w-4 h-4 mr-2" />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium flex items-center"
                >
                  <FiTag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleShare}
              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              <FiShare2 className="w-4 h-4 mr-2" />
              Chia sẻ
            </button>
            <button
              onClick={handleBookmark}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                isBookmarked 
                  ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <FiBookmark className="w-4 h-4 mr-2" />
              {isBookmarked ? 'Đã lưu' : 'Lưu bài'}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          {post.content ? (
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-gray-800 prose-headings:font-bold
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:text-cyan-700
                prose-strong:text-gray-800 prose-strong:font-semibold
                prose-code:text-cyan-600 prose-code:bg-cyan-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-gray-900 prose-pre:text-gray-100
                prose-blockquote:border-cyan-500 prose-blockquote:bg-cyan-50 prose-blockquote:text-cyan-800
                prose-ul:text-gray-700 prose-ol:text-gray-700
                prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
            />
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📖</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Bài viết có trang riêng</h2>
              <p className="text-gray-600 mb-6">
                Bài viết này có trang chi tiết riêng với nội dung đầy đủ và tương tác tốt hơn.
              </p>
              <button
                onClick={() => window.location.href = `/posts/${post.slug}`}
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Đọc bài viết đầy đủ
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {prevPost && (
            <Link
              to={`/posts/${prevPost.slug}`}
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <FiArrowLeft className="w-4 h-4 mr-2" />
                Bài trước
              </div>
              <h3 className="font-bold text-gray-800 group-hover:text-cyan-600 transition-colors leading-tight">
                {prevPost.title}
              </h3>
            </Link>
          )}

          {nextPost && (
            <Link
              to={`/posts/${nextPost.slug}`}
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:ml-auto md:text-right"
            >
              <div className="flex items-center justify-end text-gray-500 text-sm mb-2">
                Bài tiếp theo
                <FiArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </div>
              <h3 className="font-bold text-gray-800 group-hover:text-cyan-600 transition-colors leading-tight">
                {nextPost.title}
              </h3>
            </Link>
          )}
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Bài viết liên quan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts
              .filter(p => p.category === post.category && p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/posts/${relatedPost.slug}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="text-xs text-gray-500 mb-2 flex items-center">
                      <FiCalendar className="w-3 h-3 mr-1" />
                      {new Date(relatedPost.date).toLocaleDateString('vi-VN')}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors leading-tight">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
