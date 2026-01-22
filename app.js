// Vue 3应用实例
const { createApp } = Vue;

// 创建Vue应用
const app = createApp({
    // 数据
    data() {
            return {
                isDayMode: true, // 当前模式：true为白天，false为黑夜
                isMusicPlaying: true, // 音乐播放状态
                // 音乐播放器相关
                songs: [
                    { name: '星空剪影', src: '音乐素材/星空剪影.mp3' },
                    { name: '相依为命', src: '音乐素材/相依为命.mp3' },
                    { name: '单车', src: '音乐素材/单车.mp3' },
                    { name: '在他乡', src: '音乐素材/在他乡.mp3' },
                    { name: '安静', src: '音乐素材/安静.mp3' },
                    { name: '程艾影', src: '音乐素材/程艾影.mp3' },
                    { name: '出现又离开', src: '音乐素材/出现又离开.mp3' },
                    { name: '刻在我心底的名字', src: '音乐素材/刻在我心底的名字.mp3' },
                    { name: '不再联系', src: '音乐素材/不再联系.mp3' },
                    { name: '心墙', src: '音乐素材/心墙.mp3' },
                    { name: '爱的太晚', src: '音乐素材/爱的太晚.mp3' },
                    { name: '想你的夜(未眠版)', src: '音乐素材/想你的夜(未眠版).mp3' },
                    { name: '小宇', src: '音乐素材/小宇.mp3' },
                    { name: '喜帖街', src: '音乐素材/喜帖街.mp3' },
                    { name: '搁浅', src: '音乐素材/搁浅.mp3' },
                    { name: 'アイロニ', src: '音乐素材/アイロニ.mp3' },
                    { name: '用情(Live)', src: '音乐素材/用情(Live).mp3' },
                    { name: '心做し', src: '音乐素材/心做し.mp3' },
                    { name: '一路生花2024', src: '音乐素材/一路生花2024.mp3' },
                    { name: '一寸日光 三寸心上', src: '音乐素材/一寸日光 三寸心上.mp3' },
                    { name: '扑通扑通', src: '音乐素材/扑通扑通.mp3' },
                    { name: '青春不就是不知深浅', src: '音乐素材/青春不就是不知深浅.mp3' },
                    { name: '我是你的小狗', src: '音乐素材/我是你的小狗.mp3' },
                    { name: '暖暖(Live)', src: '音乐素材/暖暖(Live).mp3' },
                    { name: '水星记', src: '音乐素材/水星记.mp3' },
                    { name: '气象站台', src: '音乐素材/气象站台.mp3' },
                    { name: '寒山行', src: '音乐素材/寒山行.mp3' },
                    { name: 'I Wanted You(温柔版)', src: '音乐素材/I Wanted You(温柔版).mp3' },
                    { name: '夏日期待', src: '音乐素材/夏日期待.mp3' },
                    { name: '春日寻', src: '音乐素材/春日寻.mp3' }
                ],
                currentSongIndex: 0, // 当前播放歌曲索引
                currentSong: {}, // 当前播放歌曲
                currentTime: 0, // 当前播放时间（秒）
                duration: 0, // 歌曲总时长（秒）
                sortOrder: 'asc', // 排序顺序：'asc'（升序）或 'desc'（降序）
                originalSongs: [], // 原始歌曲顺序备份
                draggedIndex: null, // 当前拖拽的歌曲索引
                // 图片轮播相关
                images: [
                    // 使用贺卡素材文件夹中实际存在的图片文件名
                    { src: '贺卡素材/1.jpeg', alt: '新年祝福图片1' },
                    { src: '贺卡素材/2.jpeg', alt: '新年祝福图片2' },
                    { src: '贺卡素材/3.jpeg', alt: '新年祝福图片3' },
                    { src: '贺卡素材/4.jpeg', alt: '新年祝福图片4' },
                    { src: '贺卡素材/5.jpeg', alt: '新年祝福图片5' },
                    { src: '贺卡素材/6.jpeg', alt: '新年祝福图片6' },
                    { src: '贺卡素材/7.jpeg', alt: '新年祝福图片7' },
                    { src: '贺卡素材/8.jpeg', alt: '新年祝福图片8' },
                    { src: '贺卡素材/9.jpeg', alt: '新年祝福图片9' },
                    { src: '贺卡素材/10.jpeg', alt: '新年祝福图片10' },
                    { src: '贺卡素材/11.jpeg', alt: '新年祝福图片11' },
                    { src: '贺卡素材/12.jpeg', alt: '新年祝福图片12' },
                    { src: '贺卡素材/13.jpeg', alt: '新年祝福图片13' },
                    { src: '贺卡素材/14.jpeg', alt: '新年祝福图片14' },
                    { src: '贺卡素材/15.jpeg', alt: '新年祝福图片15' },
                    { src: '贺卡素材/16.jpeg', alt: '新年祝福图片16' },
                    { src: '贺卡素材/17.jpeg', alt: '新年祝福图片17' },
                    { src: '贺卡素材/18.jpeg', alt: '新年祝福图片18' },
                    { src: '贺卡素材/19.jpeg', alt: '新年祝福图片19' },
                    { src: '贺卡素材/20.jpeg', alt: '新年祝福图片20' },
                    { src: '贺卡素材/21.jpeg', alt: '新年祝福图片21' },
                    { src: '贺卡素材/22.jpeg', alt: '新年祝福图片22' },
                    { src: '贺卡素材/23.jpeg', alt: '新年祝福图片23' },
                    { src: '贺卡素材/24.jpeg', alt: '新年祝福图片24' },
                    { src: '贺卡素材/25.jpeg', alt: '新年祝福图片25' },
                    { src: '贺卡素材/26.jpeg', alt: '新年祝福图片26' },
                    { src: '贺卡素材/27.png', alt: '新年祝福图片27' },
                    { src: '贺卡素材/28.png', alt: '新年祝福图片28' }
                ],
                currentImageIndex: 0, // 当前显示图片索引
                slideshowInterval: null, // 轮播定时器
                slideshowSpeed: 3000, // 轮播速度（毫秒）
                dragOverIndex: null, // 当前悬停的歌曲索引
                // 移除了音效功能
                snowInterval: null, // 雪花定时器
                // 开屏动画相关
                splashVisible: true, // 开屏动画是否可见
                sakuraInterval: null, // 樱花流星定时器
                // 烟花相关状态
                fireworks: [],
                particles: [],
                canvas: null,
                ctx: null,
                animationFrameId: null,
                // 移除了音效功能
                // 烟花配置
                fireworkConfig: {
                    particleCount: 150, // 增加粒子数量
                    launchInterval: 300, // 减小发射间隔，增加频率
                    rocketSpeed: 12, // 增加火箭速度，让烟花飞得更高
                    gravity: 0.08, // 降低重力加速度，延长粒子上升和下降时间
                    particleFriction: 0.98, // 增加粒子摩擦系数，让粒子速度减慢得更慢
                    minHue: 0, // 最小色相
                    maxHue: 360, // 最大色相
                    particleSize: 2 // 粒子大小
                },
                autoToggleTimer: null // 自动切换定时器
            };
        },
        // 图片轮播方法
        goToImage(index) {
            this.currentImageIndex = index;
            this.scrollToCurrentImage();
        },
        
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
            this.scrollToCurrentImage();
        },
        
        prevImage() {
            this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
            this.scrollToCurrentImage();
        },
        
        // 滚动到当前选中的图片
        scrollToCurrentImage() {
            // 延迟执行，确保DOM更新后再滚动
            this.$nextTick(() => {
                const gallery = this.$refs.imageGallery;
                if (!gallery) return;
                
                const activeItem = gallery.querySelector('.gallery-item.active');
                if (activeItem) {
                    // 计算滚动位置，使当前图片居中显示
                    const galleryRect = gallery.getBoundingClientRect();
                    const itemRect = activeItem.getBoundingClientRect();
                    const scrollLeft = gallery.scrollLeft + (itemRect.left - galleryRect.left) - (galleryRect.width / 2) + (itemRect.width / 2);
                    
                    // 平滑滚动
                    gallery.scrollTo({
                        left: scrollLeft,
                        behavior: 'smooth'
                    });
                }
            });
        },
        
        startSlideshow() {
            if (this.slideshowInterval) {
                clearInterval(this.slideshowInterval);
            }
            this.slideshowInterval = setInterval(() => {
                this.nextImage();
            }, this.slideshowSpeed);
        },
        
    // 生命周期钩子
    mounted() {
            // 备份原始歌曲顺序
            this.originalSongs = JSON.parse(JSON.stringify(this.songs));
            
            // 初始化雪花效果
            this.createSnowflakes();
            // 初始化Canvas
            this.initCanvas();
            // 添加窗口大小变化监听
            window.addEventListener('resize', this.initCanvas);
            // 添加点击事件监听
            document.addEventListener('click', this.handleClick);
            // 启动自动切换定时器，每隔1分钟切换一次
            this.startAutoToggle();
            
            // 启动30秒自动下滑定时器，每访问一次只执行一次
            this.startAutoScroll();
            
            // 初始化音乐播放器
            this.initMusicPlayer();
            
            // 初始化开屏动画
            this.initSplashScreen();
            
            // 启动图片轮播
            this.startSlideshow();
            
            // 初始化移动端触摸滑动功能
            this.initTouchSwipe();
        },
    // 组件销毁时移除事件监听
        beforeUnmount() {
            window.removeEventListener('resize', this.initCanvas);
            document.removeEventListener('click', this.handleClick);
            // 移除用户交互监听
            this.removeUserInteractionListeners();
            // 清除自动切换定时器
            this.clearAutoToggle();
            // 停止图片轮播
            this.stopSlideshow();
            
            // 移除触摸滑动事件监听器
            const slideshowContainer = document.querySelector('.slideshow-container');
            if (slideshowContainer && this.handleSwipe) {
                slideshowContainer.removeEventListener('touchstart', (e) => {
                    this.touchStartX = e.changedTouches[0].screenX;
                });
                slideshowContainer.removeEventListener('touchend', (e) => {
                    this.touchEndX = e.changedTouches[0].screenX;
                    this.handleSwipe();
                });
            }
        },
    // 监听窗口大小变化
    updated() {
        // 确保在模式切换时Canvas尺寸正确
        if (!this.isDayMode) {
            this.initCanvas();
        }
    },
    // 方法
    methods: {
        // 初始化移动端触摸滑动功能
        initTouchSwipe() {
            // 获取轮播容器元素
            const slideshowContainer = document.querySelector('.slideshow-container');
            if (!slideshowContainer) return;
            
            let touchStartX = 0;
            let touchEndX = 0;
            
            // 触摸开始事件
            slideshowContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            // 触摸结束事件
            slideshowContainer.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe();
            });
            
            // 处理滑动逻辑的函数
            this.handleSwipe = () => {
                // 滑动阈值，避免误触
                const swipeThreshold = 50;
                
                // 向左滑动
                if (touchEndX < touchStartX - swipeThreshold) {
                    this.nextImage();
                }
                
                // 向右滑动
                if (touchEndX > touchStartX + swipeThreshold) {
                    this.prevImage();
                }
            };
        },
        
        // 图片轮播方法
        goToImage(index) {
            this.currentImageIndex = index;
            this.scrollToCurrentImage();
        },
        
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
            this.scrollToCurrentImage();
        },
        
        prevImage() {
            this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
            this.scrollToCurrentImage();
        },
        
        // 滚动到当前选中的图片
        scrollToCurrentImage() {
            // 延迟执行，确保DOM更新后再滚动
            this.$nextTick(() => {
                const gallery = this.$refs.imageGallery;
                if (!gallery) return;
                
                const activeItem = gallery.querySelector('.gallery-item.active');
                if (activeItem) {
                    // 计算滚动位置，使当前图片居中显示
                    const galleryRect = gallery.getBoundingClientRect();
                    const itemRect = activeItem.getBoundingClientRect();
                    const scrollLeft = gallery.scrollLeft + (itemRect.left - galleryRect.left) - (galleryRect.width / 2) + (itemRect.width / 2);
                    
                    // 平滑滚动
                    gallery.scrollTo({
                        left: scrollLeft,
                        behavior: 'smooth'
                    });
                }
            });
        },
        
        startSlideshow() {
            if (this.slideshowInterval) {
                clearInterval(this.slideshowInterval);
            }
            this.slideshowInterval = setInterval(() => {
                this.nextImage();
            }, this.slideshowSpeed);
        },
        
        stopSlideshow() {
            if (this.slideshowInterval) {
                clearInterval(this.slideshowInterval);
                this.slideshowInterval = null;
            }
        },
        
        // 启动30秒自动下滑功能
        startAutoScroll() {
            // 30秒后执行操作
            setTimeout(() => {
                // 检测是否为移动设备
                const isMobile = window.innerWidth <= 768;
                
                if (isMobile) {
                    // 手机端：先执行屏幕抖动提示，再自动滚动
                    this.shakeScreenForScrollHint();
                } else {
                    // 桌面端：直接平滑滚动到图片展示区域
                    this.scrollToImageSection();
                }
            }, 30000); // 30000毫秒 = 30秒
        },
        
        // 手机端屏幕抖动提示效果
        shakeScreenForScrollHint() {
            // 创建抖动动画
            const body = document.body;
            
            // 添加抖动CSS类
            body.classList.add('shake-animation');
            
            // 2秒后移除抖动类并执行滚动
            setTimeout(() => {
                body.classList.remove('shake-animation');
                this.scrollToImageSection();
            }, 2000);
        },
        
        // 滚动到图片展示区域
        scrollToImageSection() {
            const imageSection = document.querySelector('.image-section');
            if (imageSection) {
                imageSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start' // 对齐到顶部
                });
            }
        },
        // 点击事件处理
        handleClick(event) {
            if (this.isDayMode) {
                // 白天模式：雪花消散效果
                this.createClickSnowflakes(event.clientX, event.clientY);
            } else {
                // 黑夜模式：烟花爆炸效果
                this.createClickFirework(event.clientX, event.clientY);
            }
        },
        // 创建点击雪花消散效果
        createClickSnowflakes(x, y) {
            const snowContainer = document.getElementById('snow-container');
            // 创建10个粒子（雪花或樱花）
            for (let i = 0; i < 10; i++) {
                const particle = document.createElement('div');
                particle.className = 'click-snowflake';
                
                // 随机决定是雪花还是樱花（3:1比例）
                const isSakura = Math.random() < 0.25;
                
                if (isSakura && this.isDayMode) {
                    // 樱花粒子
                    const sakuraTypes = ['🌸', '🌸', '🌸'];
                    particle.textContent = sakuraTypes[Math.floor(Math.random() * sakuraTypes.length)];
                    
                    // 樱花大小
                    const size = Math.random() * 12 + 10;
                    particle.style.fontSize = `${size}px`;
                    
                    // 樱花颜色为粉色系
                    particle.style.color = `rgba(255, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 150 + 150)}, 1)`;
                } else {
                    // 雪花粒子
                    const snowflakeTypes = ['❄', '❅', '❆'];
                    particle.textContent = snowflakeTypes[Math.floor(Math.random() * snowflakeTypes.length)];
                    
                    // 雪花大小
                    const size = Math.random() * 10 + 8;
                    particle.style.fontSize = `${size}px`;
                    
                    // 雪花颜色
                    particle.style.color = '#ffffff';
                }
                
                // 位置
                particle.style.left = `${x}px`;
                particle.style.top = `${y}px`;
                
                // 设置样式
                particle.style.position = 'absolute';
                particle.style.zIndex = '1000';
                particle.style.opacity = '1';
                particle.style.pointerEvents = 'none';
                
                snowContainer.appendChild(particle);
                
                // 随机方向和速度
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 3 + 2;
                const vx = Math.cos(angle) * speed;
                const vy = Math.sin(angle) * speed;
                
                // 动画消散
                const animationDuration = Math.random() * 0.5 + 0.5;
                let startTime;
                
                function animate(currentTime) {
                    if (!startTime) startTime = currentTime;
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / (animationDuration * 1000), 1);
                    
                    // 更新位置
                    particle.style.left = `${x + vx * progress * 50}px`;
                    particle.style.top = `${y + vy * progress * 50}px`;
                    
                    // 更新透明度
                    particle.style.opacity = (1 - progress).toString();
                    
                    // 更新大小
                    const scale = 1 + progress * 0.5;
                    particle.style.transform = `scale(${scale})`;
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        // 动画结束后移除
                        if (particle.parentNode) {
                            particle.parentNode.removeChild(particle);
                        }
                    }
                }
                
                requestAnimationFrame(animate);
            }
        },
        // 创建点击烟花爆炸效果
        createClickFirework(x, y) {
            // 创建烟花对象
            const firework = {
                x: x,
                y: y,
                color: `hsl(${Math.random() * (this.fireworkConfig.maxHue - this.fireworkConfig.minHue) + this.fireworkConfig.minHue}, 100%, 50%)`,
                exploded: false
            };
            
            // 直接调用爆炸函数
            this.explodeFirework(firework);
        },
        // 启动自动切换定时器
        startAutoToggle() {
            // 清除已有的定时器（如果存在）
            this.clearAutoToggle();
            // 每隔10秒（10000毫秒）调用一次toggleBackground函数
            this.autoToggleTimer = setInterval(() => {
                this.toggleBackground();
            }, 10000);
        },
        
        // 清除自动切换定时器
        clearAutoToggle() {
            if (this.autoToggleTimer) {
                clearInterval(this.autoToggleTimer);
                this.autoToggleTimer = null;
            }
        },
        
        // 切换背景模式
        toggleBackground() {
            // 手动切换时重新启动自动切换定时器
            this.startAutoToggle();
            
            const dayBg = document.getElementById('day-background');
            const twilightBg = document.getElementById('twilight-background');
            const nightBg = document.getElementById('night-background');
            const isCurrentDay = this.isDayMode;
            
            // 第一步：显示黄昏背景
            dayBg.classList.remove('active');
            twilightBg.classList.add('active');
            nightBg.classList.remove('active');
            
            // 第二步：延迟后显示目标背景
            setTimeout(() => {
                twilightBg.classList.remove('active');
                
                this.isDayMode = !isCurrentDay;
                
                if (this.isDayMode) {
                    // 切换到白天模式
                    dayBg.classList.add('active');
                    this.clearFireworks();
                    setTimeout(() => this.createSnowflakes(), 200);
                } else {
                    // 切换到黑夜模式
                    nightBg.classList.add('active');
                    this.clearSnowflakes();
                    setTimeout(() => this.startFireworks(), 200);
                }
            }, 500); // 黄昏背景显示0.5秒后切换到目标背景
        },
        // 音乐播放器初始化
        initMusicPlayer() {
            // 如果有歌曲，默认选择第一首
            if (this.songs.length > 0) {
                this.currentSongIndex = 0;
                this.currentSong = this.songs[0];
                // 尝试播放音乐，如果失败则等待用户交互
                this.tryPlayMusic();
            }
        },
        
        // 尝试播放音乐
        tryPlayMusic() {
            const audio = document.getElementById('background-music');
            audio.play().catch(error => {
                console.log('等待用户交互后播放音乐:', error);
                this.isMusicPlaying = true; // 保持播放状态为true
                // 添加用户交互监听
                this.addUserInteractionListener();
            });
        },
        
        // 添加用户交互监听
        addUserInteractionListener() {
            // 定义播放函数
            const playOnInteraction = () => {
                const audio = document.getElementById('background-music');
                audio.play().then(() => {
                    console.log('用户交互后音乐播放成功');
                    // 移除所有交互监听
                    this.removeUserInteractionListeners();
                }).catch(error => {
                    console.error('用户交互后音乐播放仍失败:', error);
                });
            };
            
            // 添加多种交互方式的监听
            document.addEventListener('click', playOnInteraction);
            document.addEventListener('touchstart', playOnInteraction);
            document.addEventListener('keydown', playOnInteraction);
            document.addEventListener('scroll', playOnInteraction);
            
            // 存储监听函数，以便后续移除
            this.playOnInteraction = playOnInteraction;
        },
        
        // 移除用户交互监听
        removeUserInteractionListeners() {
            if (this.playOnInteraction) {
                document.removeEventListener('click', this.playOnInteraction);
                document.removeEventListener('touchstart', this.playOnInteraction);
                document.removeEventListener('keydown', this.playOnInteraction);
                document.removeEventListener('scroll', this.playOnInteraction);
                this.playOnInteraction = null;
            }
        },
        
        // 音乐播放控制
        toggleMusic() {
            const audio = document.getElementById('background-music');
            this.isMusicPlaying = !this.isMusicPlaying;
            
            if (this.isMusicPlaying) {
                // 播放音乐
                audio.play().catch(error => {
                    console.error('音乐播放失败:', error);
                    this.isMusicPlaying = false;
                });
            } else {
                // 暂停音乐
                audio.pause();
            }
        },
        
        // 选择歌曲
        selectSong(index) {
            const audio = document.getElementById('background-music');
            this.currentSongIndex = index;
            this.currentSong = this.songs[index];
            this.currentTime = 0;
            
            // 重置并播放新歌曲
            audio.load();
            if (this.isMusicPlaying) {
                audio.play();
            }
        },
        
        // 上一首
        prevSong() {
            if (this.currentSongIndex > 0) {
                this.selectSong(this.currentSongIndex - 1);
            } else {
                // 循环到最后一首
                this.selectSong(this.songs.length - 1);
            }
        },
        
        // 下一首
        nextSong() {
            if (this.currentSongIndex < this.songs.length - 1) {
                this.selectSong(this.currentSongIndex + 1);
            } else {
                // 循环到第一首
                this.selectSong(0);
            }
        },
        
        // 切换歌曲排序顺序
        toggleSongOrder() {
            // 切换排序方向
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
            
            // 获取当前播放的歌曲
            const currentPlayingSong = this.currentSong;
            
            // 按照歌曲名称排序
            this.songs.sort((a, b) => {
                if (this.sortOrder === 'asc') {
                    return a.name.localeCompare(b.name, 'zh-CN');
                } else {
                    return b.name.localeCompare(a.name, 'zh-CN');
                }
            });
            
            // 更新当前播放歌曲的索引
            this.currentSongIndex = this.songs.findIndex(song => 
                song.name === currentPlayingSong.name && song.src === currentPlayingSong.src
            );
        },
        
        // 初始化开屏动画
        initSplashScreen() {
            const splashScreen = document.getElementById('splash-screen');
            const progressBar = document.getElementById('progress-bar');
            const loadingText = document.querySelector('.loading-text');
            let progress = 0;
            
            // 启动樱花流星效果
            this.startSakuraFall();
            
            // 添加点击事件监听器
            if (splashScreen) {
                splashScreen.addEventListener('click', () => {
                    this.hideSplashScreen();
                });
            }
            
            // 模拟加载进度，每秒增加20%
            const progressInterval = setInterval(() => {
                progress += Math.random() * 15 + 5; // 随机增加5-20%的进度
                
                // 确保进度不超过100%
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(progressInterval);
                    
                    // 更新加载文字
                    if (loadingText) {
                        loadingText.textContent = '点击进入主界面';
                    }
                } else {
                    // 更新加载文字
                    if (loadingText) {
                        loadingText.textContent = `Loading... ${Math.round(progress)}%`;
                    }
                }
                
                // 更新进度条宽度
                if (progressBar) {
                    progressBar.style.width = `${progress}%`;
                }
            }, 300); // 每300毫秒更新一次进度
            
            // 5秒后隐藏开屏界面（无论进度是否完成）
            setTimeout(() => {
                clearInterval(progressInterval);
                // 确保进度条显示100%
                if (progressBar) {
                    progressBar.style.width = '100%';
                }
                if (loadingText) {
                    loadingText.textContent = '点击进入主界面';
                }
            }, 5000);
        },
        
        // 启动樱花流星效果
        startSakuraFall() {
            // 清除之前的定时器（如果有）
            if (this.sakuraInterval) {
                clearInterval(this.sakuraInterval);
            }
            
            // 每100毫秒创建一个樱花流星，增加数量
            this.sakuraInterval = setInterval(() => {
                // 每次创建2-3个樱花流星，增加密度
                for (let i = 0; i < Math.floor(Math.random() * 2) + 2; i++) {
                    this.createSakuraMeteor();
                }
            }, 100);
        },
        
        // 创建樱花流星
        createSakuraMeteor() {
            const splashScreen = document.getElementById('splash-screen');
            if (!splashScreen) return;
            
            // 创建樱花流星元素
            const sakuraMeteor = document.createElement('div');
            sakuraMeteor.className = 'sakura流星';
            sakuraMeteor.textContent = '🌸';
            
            // 随机水平位置（从屏幕左侧到右侧）
            const startX = Math.random() * window.innerWidth;
            sakuraMeteor.style.left = `${startX}px`;
            
            // 随机动画持续时间（2-5秒）
            const duration = Math.random() * 3 + 2;
            sakuraMeteor.style.animationDuration = `${duration}s`;
            
            // 随机水平偏移量（50-150px）
            const translateX = Math.random() * 100 + 50;
            sakuraMeteor.style.setProperty('--translateX', `${translateX}px`);
            
            // 添加到开屏动画容器
            splashScreen.appendChild(sakuraMeteor);
            
            // 动画结束后移除元素
            setTimeout(() => {
                if (sakuraMeteor.parentNode) {
                    sakuraMeteor.parentNode.removeChild(sakuraMeteor);
                }
            }, duration * 1000);
        },
        
        // 隐藏开屏动画
        hideSplashScreen() {
            const splashScreen = document.getElementById('splash-screen');
            if (splashScreen) {
                splashScreen.style.opacity = '0';
                splashScreen.style.zIndex = '-1';
                // 添加过渡效果结束后的处理
                setTimeout(() => {
                    splashScreen.style.display = 'none';
                }, 800); // 与CSS过渡时间匹配
            }
            
            // 清除樱花流星定时器
            if (this.sakuraInterval) {
                clearInterval(this.sakuraInterval);
                this.sakuraInterval = null;
            }
        },
        
        // 重置歌曲顺序为原始顺序
        resetSongOrder() {
            // 获取当前播放的歌曲
            const currentPlayingSong = this.currentSong;
            
            // 恢复原始顺序
            this.songs = JSON.parse(JSON.stringify(this.originalSongs));
            this.sortOrder = 'asc';
            
            // 更新当前播放歌曲的索引
            this.currentSongIndex = this.songs.findIndex(song => 
                song.name === currentPlayingSong.name && song.src === currentPlayingSong.src
            );
        },
        
        // 开始拖拽
        dragStart(index) {
            this.draggedIndex = index;
            // 添加延迟，确保拖拽状态正确设置
            setTimeout(() => {
                this.$forceUpdate();
            }, 0);
        },
        
        // 拖拽进入目标元素
        dragEnter(index) {
            this.dragOverIndex = index;
        },
        
        // 拖拽离开元素
        dragLeave() {
            this.dragOverIndex = null;
        },
        
        // 释放拖拽，完成排序
        drop(index) {
            // 确保拖拽索引和放置索引有效且不相同
            if (this.draggedIndex !== null && this.draggedIndex !== index) {
                // 创建歌曲列表副本
                const newSongs = [...this.songs];
                // 获取拖拽的歌曲
                const [draggedSong] = newSongs.splice(this.draggedIndex, 1);
                // 将歌曲插入到新位置
                newSongs.splice(index, 0, draggedSong);
                // 更新歌曲列表
                this.songs = newSongs;
                
                // 更新当前播放歌曲索引
                if (this.currentSongIndex === this.draggedIndex) {
                    this.currentSongIndex = index;
                } else if (this.currentSongIndex > this.draggedIndex && this.currentSongIndex <= index) {
                    this.currentSongIndex--;
                } else if (this.currentSongIndex < this.draggedIndex && this.currentSongIndex >= index) {
                    this.currentSongIndex++;
                }
            }
            
            // 重置拖拽状态
            this.draggedIndex = null;
            this.dragOverIndex = null;
        },
        
        // 更新播放进度
        updateProgress() {
            const audio = document.getElementById('background-music');
            this.currentTime = audio.currentTime;
        },
        
        // 更新歌曲时长
        updateDuration() {
            const audio = document.getElementById('background-music');
            this.duration = audio.duration;
        },
        
        // 跳转到指定位置
        seekAudio() {
            const audio = document.getElementById('background-music');
            audio.currentTime = this.currentTime;
        },
        
        // 格式化时间
        formatTime(seconds) {
            if (isNaN(seconds)) return '00:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        },
        // 雪花效果
        createSnowflakes() {
            // 清除现有雪花
            const container = document.getElementById('snow-container');
            container.innerHTML = '';
            
            // 检测是否为移动设备
            const isMobile = window.innerWidth <= 768;
            // 在移动设备上减少雪花数量以提高性能
            const snowflakeCount = isMobile ? 30 : 120;
            
            // 创建雪花（根据设备调整数量）
            for (let i = 0; i < snowflakeCount; i++) {
                this.createSnowflake();
            }
            
            // 每隔150ms创建新雪花（减小间隔，增加数量）
            this.snowInterval = setInterval(() => this.createSnowflake(), 150);
        },
        createSnowflake() {
            const container = document.getElementById('snow-container');
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            
            // 随机决定是雪花还是樱花（3:1比例，雪花多一些）
            const isSakura = Math.random() < 0.25;
            
            if (isSakura && this.isDayMode) {
                // 樱花模式（只在白天显示）
                const sakuraTypes = ['🌸', '🌸', '🌸'];
                const type = sakuraTypes[Math.floor(Math.random() * sakuraTypes.length)];
                snowflake.textContent = type;
                
                // 樱花大小比雪花略大
                const size = Math.random() * 20 + 16;
                snowflake.style.fontSize = `${size}px`;
                snowflake.style.lineHeight = '1';
                
                // 樱花颜色为粉色系
                snowflake.style.color = `rgba(255, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 150 + 150)}, ${Math.random() * 0.3 + 0.7})`;
                
                // 樱花下落慢一些
                const duration = Math.random() * 10 + 12;
                snowflake.style.animationDuration = `${duration}s`;
            } else {
                // 雪花模式
                const snowflakeTypes = ['❄', '❅', '❆'];
                const type = snowflakeTypes[Math.floor(Math.random() * snowflakeTypes.length)];
                snowflake.textContent = type;
                
                // 雪花大小
                const size = Math.random() * 16 + 12;
                snowflake.style.fontSize = `${size}px`;
                snowflake.style.lineHeight = '1';
                
                // 雪花颜色保持白色
                snowflake.style.color = 'white';
                
                // 雪花下落速度控制（8-15秒）
                const duration = Math.random() * 7 + 8;
                snowflake.style.animationDuration = `${duration}s`;
            }
            
            // 随机水平位置
            snowflake.style.left = `${Math.random() * 100}%`;
            snowflake.style.top = '-20px';
            
            // 设置z-index确保在最上层
            snowflake.style.zIndex = '10';
            
            // 统一的透明度设置
            snowflake.style.opacity = Math.random() * 0.3 + 0.7;
            
            // 随机旋转
            const rotation = Math.random() * 360;
            snowflake.style.transform = `rotate(${rotation}deg)`;
            
            container.appendChild(snowflake);
            
            // 元素消失后移除
            const duration = parseFloat(snowflake.style.animationDuration);
            setTimeout(() => {
                if (snowflake.parentNode) {
                    snowflake.parentNode.removeChild(snowflake);
                }
            }, duration * 1000);
        },
        clearSnowflakes() {
            clearInterval(this.snowInterval);
            const container = document.getElementById('snow-container');
            container.innerHTML = '';
        },
        // Canvas初始化
        initCanvas() {
            this.canvas = document.getElementById('fireworks-canvas');
            if (!this.canvas) return;
            
            // 设置Canvas尺寸为窗口大小
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            
            // 获取绘图上下文
            this.ctx = this.canvas.getContext('2d');
            
            // 设置Canvas样式
            this.canvas.style.position = 'absolute';
            this.canvas.style.top = '0';
            this.canvas.style.left = '0';
            this.canvas.style.zIndex = '100';
        },
        // 烟花效果
        startFireworks() {
            // 清空现有烟花
            this.clearFireworks();
            
            // 开始发射烟花
            this.launchInterval = setInterval(() => {
                this.launchFirework();
            }, this.fireworkConfig.launchInterval);
            
            // 启动动画循环
            this.animate();
        },
        // 发射烟花
        launchFirework() {
            // 随机发射位置（底部，整个屏幕宽度）
            const x = Math.random() * this.canvas.width;
            
            // 创建火箭对象
            const firework = {
                x: x,
                y: this.canvas.height,
                dy: -Math.random() * 2 - this.fireworkConfig.rocketSpeed, // 垂直速度
                color: `hsl(${Math.random() * (this.fireworkConfig.maxHue - this.fireworkConfig.minHue) + this.fireworkConfig.minHue}, 100%, 50%)`,
                exploded: false,
                trail: [] // 火箭拖尾
            };
            
            this.fireworks.push(firework);
            
            // 移除了音效功能
        },
        // 爆炸烟花 - 增加多种爆炸形状和效果
        explodeFirework(firework) {
            const config = this.fireworkConfig;
            
            // 随机选择爆炸类型 - 增加心形爆炸的概率
            // 添加多种爆炸效果，增加视觉丰富度
            const explosionTypes = ['circle', 'star', 'heart', 'spiral', 'flower'];
            const explosionType = explosionTypes[Math.floor(Math.random() * explosionTypes.length)];
            
            // 为爆炸添加颜色变化效果
            const baseHue = firework.color.match(/\d+/)[0];
            
            // 创建多个粒子
            for (let i = 0; i < config.particleCount; i++) {
                let angle, speed;
                
                // 根据不同爆炸类型计算粒子角度和速度
                switch (explosionType) {
                    case 'circle':
                        // 圆形爆炸（默认）
                        angle = (Math.PI * 2 * i) / config.particleCount;
                        speed = Math.random() * 5 + 2;
                        break;
                    case 'star':
                        // 星形爆炸
                        const starPoints = 5;
                        const mainAngle = (Math.PI * 2 * i) / config.particleCount;
                        const starAngle = Math.sin(mainAngle * starPoints) * 0.3;
                        angle = mainAngle + starAngle;
                        speed = Math.random() * 4 + 3;
                        break;
                
                    // 移除了十字形爆炸效果
                    case 'heart':
                        // 心形爆炸 - 修正方向为正立，并优化形状和留存时间
                        const t = (Math.PI * 2 * i) / config.particleCount;
                        const heartX = 16 * Math.pow(Math.sin(t), 3);
                        // 原心形方程Y值取反，解决Canvas坐标系中Y轴向下导致的倒置问题
                        const heartY = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
                        // 转换为角度
                        angle = Math.atan2(heartY, heartX);
                        // 调整速度计算，让心形形状更清晰（稍微增加基础速度使形状更完整）
                        const heartDistance = Math.sqrt(heartX * heartX + heartY * heartY);
                        speed = (heartDistance / 20) * (Math.random() * 1.5 + 2.0) + 0.8; // 增加基础速度，让心形更饱满
                        break;
                    
                    case 'spiral':
                        // 螺旋形爆炸
                        const spiralRadius = 5;
                        const spiralTurns = 3;
                        const spiralAngle = (Math.PI * 2 * i) / config.particleCount;
                        const spiralRadiusOffset = (spiralRadius * i) / config.particleCount;
                        const spiralX = spiralRadiusOffset * Math.cos(spiralAngle * spiralTurns);
                        const spiralY = spiralRadiusOffset * Math.sin(spiralAngle * spiralTurns);
                        angle = Math.atan2(spiralY, spiralX);
                        speed = (spiralRadiusOffset / spiralRadius) * (Math.random() * 3 + 2) + 1;
                        break;
                    
                    case 'flower':
                        // 花朵形爆炸
                        const flowerPetals = 6;
                        const flowerAngle = (Math.PI * 2 * i) / config.particleCount;
                        const petalAngle = Math.cos(flowerAngle * flowerPetals) * 0.5;
                        angle = flowerAngle + petalAngle;
                        speed = Math.random() * 4 + 2;
                        break;
                    
                    default:
                        // 默认使用圆形爆炸
                        angle = (Math.PI * 2 * i) / config.particleCount;
                        speed = Math.random() * 5 + 2;
                        break;
                }
                
                // 随机颜色变化，创建渐变效果
                const hueVariation = Math.random() * 40 - 20;
                const particleColor = `hsl(${parseInt(baseHue) + hueVariation}, 100%, 50%)`;
                
                // 优化粒子属性，让形状持续时间更适中
                let particleDecay, particleSize;
                // 增加衰减速度，让形状持续时间适当缩短
                particleDecay = Math.random() * 0.012 + 0.003; // 加快衰减速度
                particleSize = config.particleSize + Math.random() * 3 + 1; // 略微减小粒子尺寸
                
                // 根据不同爆炸类型进行微调
                switch(explosionType) {
                    case 'heart':
                    case 'spiral':
                    case 'flower':
                        // 复杂形状保持稍慢的衰减，但比之前更快
                        particleDecay *= 0.9;
                        particleSize += 0.5;
                        break;
                    case 'star':
                        // 星形保持中等衰减
                        particleDecay *= 0.95;
                        break;
                }
                
                // 创建粒子对象
                const particle = {
                    x: firework.x,
                    y: firework.y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    color: particleColor,
                    alpha: 1,
                    decay: particleDecay,
                    size: particleSize
                };
                
                this.particles.push(particle);
            }
            
            // 添加额外的火花效果
            this.addSparkEffects(firework.x, firework.y, firework.color);
            
            // 移除了音效功能
            
            // 标记烟花已爆炸
            firework.exploded = true;
        },
        
        // 添加火花效果
        addSparkEffects(x, y, color) {
            // 创建少量快速移动的火花
            for (let i = 0; i < 10; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 8 + 5;
                
                const spark = {
                    x: x,
                    y: y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    color: color,
                    alpha: 0.8,
                    decay: Math.random() * 0.05 + 0.02,
                    size: Math.random() * 2 + 1
                };
                
                this.particles.push(spark);
            }
        },
        // 动画循环
        animate() {
            if (!this.canvas || !this.ctx) return;
            
            // 半透明填充画布，产生拖尾效果，增加透明度缩短拖尾持续时间
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            // 更新和绘制所有火箭
            for (let i = this.fireworks.length - 1; i >= 0; i--) {
                const firework = this.fireworks[i];
                
                // 绘制火箭拖尾
                firework.trail.push({ x: firework.x, y: firework.y });
                if (firework.trail.length > 10) {
                    firework.trail.shift();
                }
                
                this.ctx.save();
                for (let j = 0; j < firework.trail.length; j++) {
                    const trail = firework.trail[j];
                    const opacity = j / firework.trail.length;
                    
                    this.ctx.beginPath();
                    this.ctx.arc(trail.x, trail.y, 2, 0, Math.PI * 2);
                    this.ctx.fillStyle = `${firework.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
                    this.ctx.fill();
                }
                this.ctx.restore();
                
                // 更新火箭位置
                firework.x += 0; // 火箭只向上飞，不左右移动
                firework.y += firework.dy;
                firework.dy += this.fireworkConfig.gravity; // 应用重力
                
                // 绘制火箭
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.arc(firework.x, firework.y, 3, 0, Math.PI * 2);
                this.ctx.fillStyle = firework.color;
                this.ctx.shadowColor = firework.color;
                this.ctx.shadowBlur = 10;
                this.ctx.fill();
                this.ctx.restore();
                
                // 调整爆炸高度范围：覆盖整个屏幕高度，增加上半部分烟花数量
                // 使用加权随机算法，让烟花有更大概率在上半部分爆炸
                const minExplosionHeight = this.canvas.height * 0.1; // 最低爆炸高度（屏幕高度的10%）
                const maxExplosionHeight = this.canvas.height * 0.9; // 最高爆炸高度（屏幕高度的90%）
                
                // 为每个烟花设置随机的爆炸目标高度
                if (!firework.targetHeight) {
                    // 使用二次函数加权随机数，增加上半部分爆炸概率
                    // Math.pow(Math.random(), 0.7) 会使随机数更偏向较大值（屏幕上方）
                    const weightedRandom = Math.pow(Math.random(), 0.7);
                    firework.targetHeight = weightedRandom * (maxExplosionHeight - minExplosionHeight) + minExplosionHeight;
                }
                
                // 当火箭达到或超过目标高度时爆炸
                if (Math.random() > 0.998 || firework.y <= firework.targetHeight) {
                    this.explodeFirework(firework);
                    this.fireworks.splice(i, 1);
                }
            }
            
            // 更新和绘制所有粒子
            for (let i = this.particles.length - 1; i >= 0; i--) {
                const particle = this.particles[i];
                
                // 更新粒子位置
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // 应用重力和摩擦
                particle.vy += this.fireworkConfig.gravity;
                particle.vx *= this.fireworkConfig.particleFriction;
                particle.vy *= this.fireworkConfig.particleFriction;
                
                // 更新透明度
                particle.alpha -= particle.decay;
                
                // 绘制粒子
                this.ctx.save();
                this.ctx.globalAlpha = particle.alpha;
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                this.ctx.fillStyle = particle.color;
                this.ctx.shadowColor = particle.color;
                this.ctx.shadowBlur = 5;
                this.ctx.fill();
                this.ctx.restore();
                
                // 移除透明度为0的粒子
                if (particle.alpha <= 0) {
                    this.particles.splice(i, 1);
                }
            }
            
            // 继续动画循环
            this.animationFrameId = requestAnimationFrame(() => this.animate());
        },
        // 清除烟花
        clearFireworks() {
            // 清空烟花和粒子数组
            this.fireworks = [];
            this.particles = [];
            
            // 清除发射间隔
            if (this.launchInterval) {
                clearInterval(this.launchInterval);
                this.launchInterval = null;
            }
            
            // 取消动画循环
            if (this.animationFrameId) {
                cancelAnimationFrame(this.animationFrameId);
                this.animationFrameId = null;
            }
            
            // 清空画布
            if (this.ctx) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        }
    }
});

// 使用Element Plus
app.use(ElementPlus);

// 挂载应用
app.mount('#app');