package kr.ac.kookmin.cs.oop.ch4;

public class BookThis {
	String title;
	String author;
	void show() { System.out.println(title + " " + author);}
	
	public BookThis() {
		this("", "");
		System.out.println("생성자 호출됨");
	}
	
	public BookThis(String title) {
		this(title, "작자미상");
	}
	
	public BookThis(String title, String author) {
		this.title = title; this.author = author;
	}
	public static void main(String [] args) {
		BookThis littlePrince = new BookThis("어린왕자" , "생텍쥐페리");
		BookThis loveStory = new BookThis("춘향전");
		BookThis emptyBook = new BookThis();
		loveStory.show();
	}
}
